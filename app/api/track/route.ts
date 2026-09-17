import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

const ALLOWED_TYPES = new Set(["pageview", "whatsapp_click", "email_click", "lead"]);

type TrackPayload = {
  type?: string;
  path?: string;
  referrer?: string;
  utmSource?: string;
  fbclid?: string;
  gclid?: string;
  sessionId?: string;
  meta?: Record<string, unknown>;
};

export async function POST(request: Request) {
  let payload: TrackPayload;
  try {
    // sendBeacon delivers a Blob body without a reliable Content-Type in every browser,
    // so we read as text and parse manually instead of relying on request.json().
    const raw = await request.text();
    payload = raw ? JSON.parse(raw) : {};
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const type = payload.type ?? "";
  const sessionId = (payload.sessionId ?? "").toString().slice(0, 100);

  if (!ALLOWED_TYPES.has(type) || !sessionId) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const path = (payload.path ?? "").toString().slice(0, 300);
  const referrer = (payload.referrer ?? "").toString().slice(0, 500);
  const utmSource = (payload.utmSource ?? "").toString().slice(0, 100) || null;
  const fbclid = (payload.fbclid ?? "").toString().slice(0, 300) || null;
  const gclid = (payload.gclid ?? "").toString().slice(0, 300) || null;
  const userAgent = (request.headers.get("user-agent") ?? "").slice(0, 500);
  const meta = payload.meta ?? null;

  try {
    await sql`
      INSERT INTO events (type, path, referrer, utm_source, fbclid, gclid, session_id, user_agent, meta)
      VALUES (${type}, ${path}, ${referrer}, ${utmSource}, ${fbclid}, ${gclid}, ${sessionId}, ${userAgent}, ${JSON.stringify(meta)}::jsonb)
    `;
  } catch (err) {
    console.error("Track insert failed:", err);
    // Never fail the request for the visitor over an analytics write.
  }

  return new NextResponse(null, { status: 204 });
}
