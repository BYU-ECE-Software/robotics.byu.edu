import Image from "next/image";
import { Sponsor } from "@/utils/types";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const content = (
    <Image
      src={NEXT_PUBLIC_BASE_PATH + (sponsor.logo || "/images/placeholder-logo.png")}
      alt={sponsor.name}
      width={300}
      height={300}
      className="object-contain"
    />
  );

  if (sponsor.link) {
    return (
      <a
        href={sponsor.link}
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
