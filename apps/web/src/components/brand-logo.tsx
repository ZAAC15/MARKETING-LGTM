import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";

const logoAvailable = existsSync(join(process.cwd(), "public", "branding", "logo-lgtm.png"));

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  if (!logoAvailable) {
    return <div className={`flex items-center rounded-lg border border-dashed border-border px-3 py-2 text-xs text-muted ${compact ? "h-10 w-10 justify-center px-0" : "h-[52px] w-full justify-center"}`}>Logo pendiente</div>;
  }

  return <div className={`relative ${compact ? "h-10 w-10" : "h-[52px] w-[184px]"}`}>
    <Image src="/branding/logo-lgtm.png" alt="La Gran Tienda del Mecánico" fill sizes={compact ? "40px" : "184px"} className="object-contain object-left" priority />
  </div>;
}
