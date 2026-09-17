import { Eye, Users, MessageSquareText, Mail, TrendingUp } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { sql } from "@/lib/db";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

type Totals = {
  pageviews: number;
  pageviews_30d: number;
  unique_visitors: number;
  leads: number;
  whatsapp_clicks: number;
  email_clicks: number;
  meta_clicks: number;
  google_clicks: number;
};

type HourRow = { hour: number; count: number };
type ReferrerRow = { referrer: string; count: number };
type LeadRow = {
  meta: { name?: string; email?: string; phone?: string; service?: string } | null;
  created_at: string;
};

function StatCard({ icon: Icon, value, label }: { icon: typeof Eye; value: number | string; label: string }) {
  return (
    <div className="card-outline rounded-2xl bg-[#fbf9f2] p-5">
      <div className="w-9 h-9 rounded-lg bg-[#a3e635] border-[1.5px] border-[#16140f] flex items-center justify-center text-[#16140f] mb-3">
        <Icon size={16} />
      </div>
      <p className="text-2xl font-extrabold text-[#16140f]">{value}</p>
      <p className="text-xs text-[#57534a] mt-1">{label}</p>
    </div>
  );
}

export default async function AdminDashboardPage() {
  const [totalsRows, hourly, topReferrers, recentLeads] = await Promise.all([
    sql`
      SELECT
        count(*) FILTER (WHERE type = 'pageview')::int AS pageviews,
        count(*) FILTER (WHERE type = 'pageview' AND created_at > now() - interval '30 days')::int AS pageviews_30d,
        count(DISTINCT session_id) FILTER (WHERE type = 'pageview')::int AS unique_visitors,
        count(*) FILTER (WHERE type = 'lead')::int AS leads,
        count(*) FILTER (WHERE type = 'whatsapp_click')::int AS whatsapp_clicks,
        count(*) FILTER (WHERE type = 'email_click')::int AS email_clicks,
        count(*) FILTER (WHERE type = 'pageview' AND fbclid IS NOT NULL)::int AS meta_clicks,
        count(*) FILTER (WHERE type = 'pageview' AND gclid IS NOT NULL)::int AS google_clicks
      FROM events
    `,
    sql`
      SELECT extract(hour FROM created_at AT TIME ZONE 'America/Sao_Paulo')::int AS hour, count(*)::int AS count
      FROM events
      WHERE type = 'pageview'
      GROUP BY hour
      ORDER BY hour
    `,
    sql`
      SELECT referrer, count(*)::int AS count
      FROM events
      WHERE type = 'pageview' AND referrer IS NOT NULL AND referrer != ''
      GROUP BY referrer
      ORDER BY count DESC
      LIMIT 5
    `,
    sql`
      SELECT meta, created_at
      FROM events
      WHERE type = 'lead'
      ORDER BY created_at DESC
      LIMIT 20
    `,
  ]);

  const totals = (totalsRows[0] ?? {
    pageviews: 0,
    pageviews_30d: 0,
    unique_visitors: 0,
    leads: 0,
    whatsapp_clicks: 0,
    email_clicks: 0,
    meta_clicks: 0,
    google_clicks: 0,
  }) as Totals;

  const hourMap = new Map((hourly as HourRow[]).map((r) => [r.hour, r.count]));
  const maxHourCount = Math.max(1, ...Array.from(hourMap.values()));
  const peakHour = (hourly as HourRow[]).reduce(
    (best, r) => (r.count > best.count ? r : best),
    { hour: 0, count: 0 }
  );

  return (
    <main className="min-h-screen bg-[#f5f1e6] px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-[#16140f]">Painel Admin</h1>
            <p className="text-sm text-[#57534a]">Visitas, leads e horários de acesso do site.</p>
          </div>
          <LogoutButton />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <StatCard icon={Eye} value={totals.pageviews} label="Visitas (total)" />
          <StatCard icon={TrendingUp} value={totals.pageviews_30d} label="Visitas (30 dias)" />
          <StatCard icon={Users} value={totals.unique_visitors} label="Visitantes únicos" />
          <StatCard icon={MessageSquareText} value={totals.leads} label="Formulários enviados" />
          <StatCard icon={MessageSquareText} value={totals.whatsapp_clicks} label="Cliques no WhatsApp" />
          <StatCard icon={Mail} value={totals.email_clicks} label="Cliques no e-mail" />
        </div>

        <div className="card-outline rounded-2xl bg-[#fbf9f2] p-6 mb-10">
          <h2 className="text-sm font-bold text-[#16140f] uppercase tracking-wide mb-1">
            Cliques vindos de campanhas
          </h2>
          <p className="text-xs text-[#57534a] mb-5">
            Visitas com identificador de clique do Meta (fbclid) ou do Google Ads (gclid) na URL — sinal de
            tráfego pago ou de posts/anúncios, mesmo antes de instalar o pixel de conversão.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 rounded-xl border-[1.5px] border-[#16140f]/15 p-4">
              <div className="w-10 h-10 rounded-lg bg-[#a3e635] border-[1.5px] border-[#16140f] flex items-center justify-center text-[#16140f] shrink-0">
                <FaFacebook size={18} />
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#16140f]">{totals.meta_clicks}</p>
                <p className="text-xs text-[#57534a]">Meta (Facebook/Instagram)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border-[1.5px] border-[#16140f]/15 p-4">
              <div className="w-10 h-10 rounded-lg bg-[#a3e635] border-[1.5px] border-[#16140f] flex items-center justify-center text-[#16140f] shrink-0">
                <FaGoogle size={18} />
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#16140f]">{totals.google_clicks}</p>
                <p className="text-xs text-[#57534a]">Google Ads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-10">
          <div className="lg:col-span-3 card-outline rounded-2xl bg-[#fbf9f2] p-6">
            <h2 className="text-sm font-bold text-[#16140f] uppercase tracking-wide mb-1">
              Horários de acesso
            </h2>
            <p className="text-xs text-[#57534a] mb-5">
              Distribuição de visitas por hora do dia (horário de Brasília)
              {totals.pageviews > 0 && (
                <> — pico às <strong>{String(peakHour.hour).padStart(2, "0")}h</strong></>
              )}
              .
            </p>
            <div className="flex items-end gap-1 h-32 mt-10">
              {Array.from({ length: 24 }, (_, hour) => {
                const count = hourMap.get(hour) ?? 0;
                const heightPct = Math.max(2, (count / maxHourCount) * 100);
                return (
                  <div key={hour} className="flex-1 h-full flex flex-col justify-end items-center gap-1 group relative">
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#16140f] text-[#f5f1e6] text-[11px] font-bold px-2.5 py-1.5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none z-10">
                      {String(hour).padStart(2, "0")}h — {count} {count === 1 ? "visita" : "visitas"}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#16140f]" />
                    </div>
                    <div
                      className="w-full rounded-sm bg-[#16140f] group-hover:bg-[#a3e635] transition-colors"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] text-[#57534a] mt-2 font-mono">
              <span>00h</span>
              <span>06h</span>
              <span>12h</span>
              <span>18h</span>
              <span>23h</span>
            </div>
          </div>

          <div className="lg:col-span-2 card-outline rounded-2xl bg-[#fbf9f2] p-6">
            <h2 className="text-sm font-bold text-[#16140f] uppercase tracking-wide mb-4">
              Principais origens
            </h2>
            {(topReferrers as ReferrerRow[]).length === 0 ? (
              <p className="text-sm text-[#57534a]">Sem dados suficientes ainda.</p>
            ) : (
              <ul className="flex flex-col gap-2.5">
                {(topReferrers as ReferrerRow[]).map((r) => (
                  <li key={r.referrer} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-[#16140f] truncate">{r.referrer}</span>
                    <span className="font-mono font-bold text-[#4d7c0f] shrink-0">{r.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="card-outline rounded-2xl bg-[#fbf9f2] p-6">
          <h2 className="text-sm font-bold text-[#16140f] uppercase tracking-wide mb-4">
            Leads recentes (formulário)
          </h2>
          {(recentLeads as LeadRow[]).length === 0 ? (
            <p className="text-sm text-[#57534a]">Nenhum lead recebido ainda.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[#57534a] border-b border-[#16140f]/15">
                    <th className="pb-2 pr-4 font-semibold">Nome</th>
                    <th className="pb-2 pr-4 font-semibold">E-mail</th>
                    <th className="pb-2 pr-4 font-semibold">Telefone</th>
                    <th className="pb-2 pr-4 font-semibold">Serviço</th>
                    <th className="pb-2 font-semibold">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {(recentLeads as LeadRow[]).map((lead, i) => (
                    <tr key={i} className="border-b border-[#16140f]/8 last:border-0">
                      <td className="py-2.5 pr-4 text-[#16140f] font-medium">{lead.meta?.name ?? "—"}</td>
                      <td className="py-2.5 pr-4 text-[#57534a]">{lead.meta?.email ?? "—"}</td>
                      <td className="py-2.5 pr-4 text-[#57534a]">{lead.meta?.phone || "—"}</td>
                      <td className="py-2.5 pr-4 text-[#57534a]">{lead.meta?.service || "—"}</td>
                      <td className="py-2.5 text-[#57534a] font-mono text-xs">
                        {new Date(lead.created_at).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
