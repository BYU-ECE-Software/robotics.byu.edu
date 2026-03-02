import Image from "next/image";
import Link from "next/link";
import { Professor } from "@/utils/types";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function ProfessorCard({ professor }: { professor: Professor }) {
  const imageSrc =
    NEXT_PUBLIC_BASE_PATH + (professor.image || "/images/placeholder-person.jpg");

  const CardInner = (
    <article
      id={professor.id}
      className={[
        "card p-4 md:p-6",
        "flex flex-col sm:flex-row gap-4 sm:gap-6",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-lg",
        professor.link ? "cursor-pointer" : "",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative h-40 w-full sm:h-48 sm:w-[140px] overflow-hidden rounded-xl bg-slate-100 shrink-0">
        <Image
          src={imageSrc}
          alt={professor.name}
          fill
          sizes="(max-width: 640px) 100vw, 140px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-start min-w-0">
        <h3 className="text-lg font-semibold leading-tight">
          {professor.name}
        </h3>

        {professor.affiliation && (
          <p className="mt-1 text-sm font-medium text-slate-600">
            {professor.affiliation}
          </p>
        )}

        {professor.bio && (
          <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">
            {professor.bio}
          </p>
        )}

        {professor.link && (
          <p className="mt-3 text-sm font-medium text-[var(--byu-royal)]">
            View profile →
          </p>
        )}
      </div>
    </article>
  );

  // Whole card clickable only if there is a link destination
  if (professor.link) {
    const isExternal = /^https?:\/\//i.test(professor.link);

    return isExternal ? (
      <a
        href={professor.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--byu-royal)] rounded-2xl"
      >
        {CardInner}
      </a>
    ) : (
      <Link
        href={professor.link}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--byu-royal)] rounded-2xl"
      >
        {CardInner}
      </Link>
    );
  }

  return CardInner;
}
