const SESSION_KEY = "mf_sid";

export function getOrCreateSessionId(): string {
  try {
    let id = localStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to a per-call id.
    return crypto.randomUUID();
  }
}

export function track(type: string, meta?: Record<string, unknown>) {
  try {
    const params = new URLSearchParams(window.location.search);
    const payload = JSON.stringify({
      type,
      path: window.location.pathname,
      referrer: document.referrer || "",
      utmSource: params.get("utm_source") || undefined,
      sessionId: getOrCreateSessionId(),
      meta,
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/track", blob);
    } else {
      fetch("/api/track", { method: "POST", body: payload, keepalive: true });
    }
  } catch {
    // Tracking must never break the actual user action.
  }
}
