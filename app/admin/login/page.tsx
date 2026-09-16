"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f5f1e6] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border-[1.5px] border-[#16140f] bg-[#fbf9f2] p-8"
      >
        <div className="w-11 h-11 rounded-xl bg-[#16140f] flex items-center justify-center text-[#a3e635] mb-5">
          <Lock size={20} />
        </div>
        <h1 className="text-xl font-extrabold text-[#16140f] mb-1">Painel Admin</h1>
        <p className="text-sm text-[#57534a] mb-6">Acesso restrito.</p>

        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          aria-label="Senha"
          className="w-full rounded-lg border-[1.5px] border-[#16140f]/30 bg-[#f5f1e6] px-3.5 py-2.5 text-sm text-[#16140f] outline-none focus:border-[#16140f] transition-colors mb-4"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-solid w-full py-3 text-sm cursor-pointer disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        {error && <p className="text-sm text-red-600 font-semibold text-center mt-3">Senha incorreta.</p>}
      </form>
    </main>
  );
}
