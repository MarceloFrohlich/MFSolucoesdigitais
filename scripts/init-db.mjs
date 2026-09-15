// One-time (idempotent) DB schema setup.
// Usage: node --env-file=.env.local scripts/init-db.mjs
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL not set");
const sql = neon(url);

await sql`
  CREATE TABLE IF NOT EXISTS events (
    id BIGSERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    path TEXT,
    referrer TEXT,
    utm_source TEXT,
    session_id TEXT NOT NULL,
    user_agent TEXT,
    meta JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`;
await sql`CREATE INDEX IF NOT EXISTS idx_events_type ON events(type)`;
await sql`CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at)`;
await sql`CREATE INDEX IF NOT EXISTS idx_events_session ON events(session_id)`;

console.log("Schema ready.");
