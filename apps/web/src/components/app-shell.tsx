import Link from "next/link";
import {
  Bell, CalendarDays, ChevronDown, CircleHelp,
  FileUp, Gauge, Lightbulb, Megaphone, Package, Search, Settings, Settings2, Sparkles, Target,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const navigation = [
  { label: "Dashboard", icon: Gauge, active: true },
  { label: "Productos", icon: Package },
  { label: "Importación inteligente", icon: FileUp },
  { label: "Investigación de mercado", icon: Lightbulb },
  { label: "Campañas", icon: Megaphone },
  { label: "Contenido creativo", icon: Sparkles },
  { label: "Calendario", icon: CalendarDays },
  { label: "Clientes potenciales", icon: Target },
  { label: "Configuración", icon: Settings },
];

function NavItems({ mobile = false }: { mobile?: boolean }) {
  return navigation.map(({ label, icon: Icon, active }) => active ? (
    <Link key={label} href="/" aria-current="page" className={`flex shrink-0 items-center gap-3 rounded-lg bg-brand-soft px-3 py-2.5 text-[13px] font-semibold text-brand ${mobile ? "text-xs" : ""}`}>
      <Icon size={17} strokeWidth={1.8} /><span>{label}</span>
    </Link>
  ) : (
    <button key={label} type="button" disabled aria-label={`${label}, próximamente`} title="Sección preparada para una fase futura" className={`flex shrink-0 cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-muted opacity-60 ${mobile ? "text-xs" : ""}`}>
      <Icon size={17} strokeWidth={1.8} /><span>{label}</span>{!mobile && <span className="ml-auto text-[10px] font-normal text-slate-400">Próximamente</span>}
    </button>
  ));
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen">
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[252px] flex-col border-r border-border bg-white px-4 py-5 md:flex">
      <div className="mb-9 flex h-[54px] items-center px-2"><BrandLogo /></div>
      <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Espacio de trabajo</p>
      <nav aria-label="Navegación principal" className="flex flex-col gap-1"><NavItems /></nav>
      <div className="mt-auto rounded-xl border border-border bg-slate-50 p-3.5">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold"><CircleHelp size={15} className="text-brand" />Centro de ayuda</div>
        <p className="text-[11px] leading-5 text-muted">Guías y recursos estarán disponibles próximamente.</p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-border px-2 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">LG</div>
        <div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">Equipo LGTM</p><p className="mt-0.5 text-[11px] text-muted">Administración</p></div>
        <Settings2 size={16} className="text-muted" />
      </div>
    </aside>
    <div className="min-h-screen md:pl-[252px]">
      <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-border bg-white/95 px-4 backdrop-blur md:px-8">
        <div className="flex min-w-0 items-center gap-2 text-xs text-muted"><span className="hidden sm:inline">Espacio de trabajo</span><span className="hidden text-slate-300 sm:inline">/</span><span className="truncate font-medium text-foreground">Dashboard</span></div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button type="button" disabled aria-label="Buscar, próximamente" className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs text-muted opacity-60 sm:flex"><Search size={15} />Buscar<span className="ml-8 rounded border border-border px-1.5 py-0.5 text-[10px]">⌘ K</span></button>
          <button type="button" disabled aria-label="Notificaciones, próximamente" className="relative rounded-lg p-2 text-muted opacity-60"><Bell size={17} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" /></button>
          <button type="button" disabled className="hidden items-center gap-1 rounded-lg px-2 py-2 text-xs font-medium text-muted opacity-60 sm:flex">Vista general<ChevronDown size={14} /></button>
        </div>
      </header>
      <nav aria-label="Navegación móvil" className="flex gap-1 overflow-x-auto border-b border-border bg-white px-4 py-2 md:hidden"><NavItems mobile /></nav>
      <main>{children}</main>
    </div>
  </div>;
}
