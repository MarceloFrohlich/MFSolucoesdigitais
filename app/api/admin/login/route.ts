import { NextResponse } from "next/server";
import { ADMIN_COOKIE, checkPassword, createSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (!process.env.ADMIN_PASSWORD || !checkPassword(password)) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const { token, expiresAt } = createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expiresAt * 1000),
  });

  return response;
}
