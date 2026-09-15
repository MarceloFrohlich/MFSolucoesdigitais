import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "mf_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 12; // 12 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

function sign(expiresAt: number): string {
  return createHmac("sha256", getSecret()).update(String(expiresAt)).digest("hex");
}

export function createSessionToken(): { token: string; expiresAt: number } {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const signature = sign(expiresAt);
  return { token: `${expiresAt}.${signature}`, expiresAt };
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expiresAtRaw, signature] = token.split(".");
  if (!expiresAtRaw || !signature) return false;

  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt < Math.floor(Date.now() / 1000)) return false;

  const expected = sign(expiresAt);
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(signature);
  if (expectedBuf.length !== actualBuf.length) return false;

  return timingSafeEqual(expectedBuf, actualBuf);
}

export function checkPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const expectedBuf = Buffer.from(expected);
  const candidateBuf = Buffer.from(candidate);
  if (expectedBuf.length !== candidateBuf.length) return false;

  return timingSafeEqual(expectedBuf, candidateBuf);
}
