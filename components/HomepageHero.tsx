import Image from "next/image";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function HomepageHero({
  title,
  subtitle,
  image = "/images/heroes/hero-default.jpg",
  height = "60vh", // px or CSS string (e.g., '50vh')
  fit = "cover", // 'cover' | 'contain'
  position = "center", // e.g., 'center top', 'center 20%'
  overlap = false, // set true to overlap the card onto the image
  heroText,
  heroSubtext,
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
  const imageStyle = {
    height: typeof height === "number" ? `${height}px` : height,
  } as React.CSSProperties;

  return (
    <section className="relative">
      {/* Hero media */}
      <div className="relative w-full overflow-hidden" style={imageStyle}>
        <Image
          src={NEXT_PUBLIC_BASE_PATH + image}
          alt=""
          fill
          priority
          className={`${
            fit === "contain" ? "object-contain bg-slate-100" : "object-cover"
          }`}
          style={{ objectPosition: position }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/40" />
        {/* Centered text on hero image */}
        {(heroText || heroSubtext) && (
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white px-4">
              {heroText && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  {heroText}
                </h2>
              )}
              {heroSubtext && (
                <p className="mt-2 text-lg md:text-xl lg:text-2xl">
                  {heroSubtext}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <br />
      {/* Content container. If overlap=true, pull upward a bit. */}
      {/* <div className={`container-wide ${overlap ? "-mt-16" : "mt-0"} pb-6`}>
        <div className="card p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
          {children}
        </div>
      </div> */}
    </section>
  );
}
