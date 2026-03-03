import Image from "next/image";
import { Lab } from "@/utils/types";
import nextConfig from "@/next.config";

export default function LabLogo({ lab }: { lab: Lab }) {
  const content = (
    <Image
      src={nextConfig.env?.NEXT_PUBLIC_BASE_PATH + (lab.logo || "/images/placeholder-logo.png")}
      alt={lab.name}
      width={300}
      height={300}
      className="object-contain"
    />
  );

  if (lab.link) {
    return (
      <a
        href={lab.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-hover p-6 flex items-center justify-center block"
      >
        {content}
      </a>
    );
  }

  return (
    <figure className="card card-hover p-6 flex items-center justify-center">
      {content}
    </figure>
  );
}
