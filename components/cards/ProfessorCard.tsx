import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Professor } from "@/utils/types";

export default function ProfessorCard({ professor }: { professor: Professor }) {
  const initials = professor.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  const card = (
    <article className="group flex h-full flex-col border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#7fbeeb] hover:shadow-[0_18px_45px_rgba(0,46,93,.12)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e9eff3]">
        {professor.image ? (
          <Image
            src={`${professor.image}`}
            alt={professor.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center grayscale-[12%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#eaf1f6,#dbe7ef)]">
            <span className="text-5xl font-black tracking-[-0.05em] text-[#002e5d]/25">
              {initials}
            </span>
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(0,71,186,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,71,186,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 h-1 w-16 bg-[#0047ba] transition-all duration-300 group-hover:w-full" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0047ba]">
          {professor.affiliation || "Robotics faculty"}
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#002e5d]">
          {professor.name}
        </h2>
        {professor.interests && (
          <p className="mt-4 leading-7 text-slate-500">
            {professor.interests}
          </p>
        )}
        {professor.bio && (
          <p className="mt-4 leading-7 text-slate-600">
            {professor.bio}
          </p>
        )}
        {professor.link && (
          <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#002e5d]">
            View faculty profile
            <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        )}
      </div>
    </article>
  );

  if (!professor.link) return card;

  const isExternal = /^https?:\/\//i.test(professor.link);
  return isExternal ? (
    <a href={professor.link} target="_blank" rel="noopener noreferrer" className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047ba]">
      {card}
    </a>
  ) : (
    <Link href={professor.link} className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047ba]">
      {card}
    </Link>
  );
}
