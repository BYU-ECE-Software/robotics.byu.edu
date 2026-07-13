import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import nextConfig from "@/next.config";

export default function PageHero({
  title,
  subtitle,
  image = "/images/heroes/hero-default.jpg",
  height = "500px",
  fit = "cover",
  position = "center",
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  height?: number | string;
  fit?: "cover" | "contain";
  position?: string;
  overlap?: boolean;
  heroText?: string;
  heroSubtext?: string;
  children?: React.ReactNode;
}) {
  const basePath = nextConfig.env?.NEXT_PUBLIC_BASE_PATH ?? "";
  const imageStyle = {
    height: typeof height === "number" ? `${height}px` : height,
  } as React.CSSProperties;

  return (
    <section className="relative isolate overflow-hidden bg-[#002e5d] text-white">
      <div className="absolute inset-0 -z-20" style={imageStyle}>
        <Image
          src={`${basePath}${image}`}
          alt=""
          fill
          priority
          sizes="100vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          style={{ objectPosition: position }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,31,63,.98)_0%,rgba(0,46,93,.84)_48%,rgba(0,31,63,.35)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div
        className="container-wide flex min-h-[390px] flex-col justify-between py-8 sm:min-h-[460px] sm:py-10"
        style={imageStyle}
      >
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <FiChevronRight aria-hidden="true" />
          <span className="text-[#7fbeeb]">{title}</span>
        </nav>

        <div className="max-w-3xl pb-5 sm:pb-8">
          <div className="mb-5 h-1 w-16 bg-[#7fbeeb]" />
          <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
