import {
  Activity, ArrowDownRight, ArrowUpRight, Boxes, ChartNoAxesCombined,
  CircleDollarSign, PackageCheck, Plus, Sparkles, TrendingUp,
} from "lucide-react";

const stats = [
  { label: "Productos en catálogo", value: "1.284", change: "+8,2%", up: true, note: "vs. periodo anterior", icon: Boxes, tint: "bg-slate-100 text-slate-600" },
  { label: "Oportunidades detectadas", value: "36", change: "+12,5%", up: true, note: "vs. periodo anterior", icon: Sparkles, tint: "bg-brand-soft text-brand" },
  { label: "Valor de oportunidades", value: "$248,6 M", change: "+4,3%", up: true, note: "estimación de ejemplo", icon: CircleDollarSign, tint: "bg-amber-50 text-amber-700" },
  { label: "Productos por revisar", value: "18", change: "−3", up: false, note: "vs. periodo anterior", icon: PackageCheck, tint: "bg-emerald-50 text-emerald-700" },
];
const bars = [28, 39, 34, 47, 41, 57, 49, 62, 54, 74, 65, 82];
const products = [
  { name: "Escáner de diagnóstico", type: "Diagnóstico automotriz", demand: 86, badge: "Alta" },
  { name: "Multímetro automotriz", type: "Herramientas", demand: 68, badge: "Media" },
  { name: "Compresor de taller", type: "Equipos de taller", demand: 54, badge: "Media" },
];
const recent = [
  ["Catálogo de productos", "Diagnóstico", "Actualizado", "Hoy"],
  ["Análisis de categoría", "Herramientas", "En revisión", "Ayer"],
  ["Oportunidades comerciales", "Equipos diésel", "Borrador", "12 nov"],
];

export default function DashboardPage() {
  return <div className="mx-auto max-w-[1500px] px-4 pb-10 pt-7 md:px-8 md:pt-9">
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-800"><span className="h-1.5 w-1.5 rounded-full bg-gold" />Vista de demostración</div>
        <h1 className="text-[26px] font-semibold tracking-[-0.04em] text-foreground md:text-[30px]">Resumen comercial</h1>
        <p className="mt-1.5 text-sm text-muted">Una vista general de la actividad y las oportunidades.</p>
      </div>
      <button type="button" disabled title="Disponible próximamente" className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg bg-brand px-4 text-xs font-semibold text-white opacity-80 shadow-sm transition hover:bg-[#68101b] sm:self-auto"><Plus size={15} />Nuevo análisis</button>
    </div>
    <div role="note" className="mb-5 flex items-start gap-2.5 rounded-lg border border-amber-200/80 bg-amber-50/70 px-3.5 py-3 text-xs leading-5 text-amber-900"><ChartNoAxesCombined size={16} className="mt-0.5 shrink-0 text-amber-700" /><p><strong>Datos de ejemplo.</strong> Estas cifras son ilustrativas para mostrar el diseño y no corresponden a información real de la empresa.</p></div>
    <section aria-label="Indicadores de demostración" className="stat-grid">
      {stats.map(({ label, value, change, up, note, icon: Icon, tint }) => <article key={label} className="rounded-xl border border-border bg-white p-4 shadow-[var(--shadow-soft)] md:p-5">
        <div className="mb-4 flex items-start justify-between gap-2"><p className="text-xs font-medium leading-5 text-muted">{label}</p><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tint}`}><Icon size={16} strokeWidth={1.8} /></span></div>
        <p className="text-[25px] font-semibold tracking-[-0.04em] text-foreground">{value}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px]"><span className="inline-flex items-center gap-0.5 font-semibold text-emerald-700">{up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{change}</span><span className="text-muted">{note}</span></div>
      </article>)}
    </section>
    <div className="dashboard-grid mt-5">
      <section className="rounded-xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] md:p-6" aria-labelledby="activity-heading">
        <div className="mb-6 flex items-start justify-between gap-4"><div><h2 id="activity-heading" className="text-sm font-semibold">Actividad del catálogo</h2><p className="mt-1 text-xs text-muted">Indicador ilustrativo · últimos 12 meses</p></div><span className="rounded-md border border-border px-2.5 py-1.5 text-[10px] text-muted">Este año <span aria-hidden="true">⌄</span></span></div>
        <div className="relative flex h-[220px] items-end gap-2 border-b border-border pb-7 pl-8">
          {[100, 75, 50, 25].map((tick) => <span key={tick} className="absolute left-0 text-[9px] text-slate-400" style={{ bottom: `calc(${tick}% + 22px)` }}>{tick}</span>)}
          <div className="pointer-events-none absolute inset-x-8 top-0 bottom-7 flex flex-col justify-between">{[0, 1, 2, 3].map((line) => <div key={line} className="border-t border-dashed border-slate-100" />)}</div>
          {bars.map((height, index) => <div key={index} className="relative z-10 flex h-full flex-1 items-end"><div title={`Dato de ejemplo: ${height}`} className={`w-full rounded-t-[3px] transition-all ${index === bars.length - 1 ? "bg-brand" : "bg-[#e9cfd2] hover:bg-[#dcb6bb]"}`} style={{ height: `${height}%` }} /></div>)}
          <div className="absolute inset-x-8 bottom-1 flex justify-between text-[9px] text-slate-400"><span>Ene</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] text-muted"><span className="h-2 w-2 rounded-sm bg-brand" />Volumen de actividad (ejemplo)<span className="ml-auto inline-flex items-center gap-1 text-emerald-700"><TrendingUp size={13} />Tendencia ilustrativa</span></div>
      </section>
      <section className="rounded-xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] md:p-6" aria-labelledby="signals-heading">
        <div className="mb-5 flex items-start justify-between"><div><h2 id="signals-heading" className="text-sm font-semibold">Señales de mercado</h2><p className="mt-1 text-xs text-muted">Ejemplos de categorías</p></div><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-700"><Sparkles size={16} /></span></div>
        <div className="space-y-5">{products.map((product) => <article key={product.name}>
          <div className="mb-2 flex items-start justify-between gap-2"><div><h3 className="text-xs font-medium leading-5">{product.name}</h3><p className="text-[10px] text-muted">{product.type}</p></div><span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${product.badge === "Alta" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{product.badge}</span></div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-brand/75" style={{ width: `${product.demand}%` }} /></div>
        </article>)}</div>
        <p className="mt-5 border-t border-border pt-3 text-[10px] leading-4 text-muted">Contenido ilustrativo; no representa análisis de mercado real.</p>
      </section>
    </div>
    <section className="mt-5 rounded-xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] md:p-6" aria-labelledby="recent-heading">
      <div className="mb-4 flex items-center justify-between"><div><h2 id="recent-heading" className="text-sm font-semibold">Actividad reciente</h2><p className="mt-1 text-xs text-muted">Registros de demostración</p></div><Activity size={17} className="text-muted" /></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[560px] text-left text-xs"><thead><tr className="border-b border-border text-[10px] font-medium uppercase tracking-wide text-slate-400"><th className="pb-3 pr-4">Actividad</th><th className="pb-3 pr-4">Categoría</th><th className="pb-3 pr-4">Estado de ejemplo</th><th className="pb-3 text-right">Fecha</th></tr></thead><tbody>{recent.map(([name, category, status, date]) => <tr key={name} className="border-b border-slate-100 last:border-0"><td className="py-3.5 pr-4 font-medium">{name}</td><td className="py-3.5 pr-4 text-muted">{category}</td><td className="py-3.5 pr-4"><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-600">{status}</span></td><td className="py-3.5 text-right text-muted">{date}</td></tr>)}</tbody></table></div>
    </section>
    <p className="mt-5 text-center text-[10px] text-slate-400">Panel de demostración · La Gran Tienda del Mecánico</p>
  </div>;
}
