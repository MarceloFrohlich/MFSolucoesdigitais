"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

export default function Analytics() {
  useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) return;
    track("pageview");
  }, []);

  return null;
}
