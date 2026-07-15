import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Lab } from "@/utils/types";
import nextConfig from "@/next.config";

export default function LabCard({ lab, index = 0 }: { lab: Lab; index?: number }) {

  const card = (
    <article className="group grid h-full overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#7fbeeb] hover:shadow-[0_18px_45px_rgba(0,46,93,.12)]">
      <div className="relative flex min-h-56 items-center justify-center overflow-hidden bg-[#f3f6f8] p-10">
        <span className="absolute left-5 top-5 font-mono text-xs text-slate-400">
          0{index + 1}
        </span>
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(0,71,186,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,71,186,.1)_1px,transparent_1px)] [background-size:36px_36px]" />
        <Image
          src={`${lab.image}`}
          alt={`${lab.name} logo`}
          width={260}
          height={160}
          className="relative max-h-32 w-auto max-w-[80%] object-contain transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0047ba]">
          {lab.affiliation}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#002e5d]">{lab.name}</h2>
        {lab.bio && (
          <p className="mt-4 leading-7 text-slate-600">{lab.bio}</p>
        )}
        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-[#002e5d]">
          Visit the lab
          <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </article>
  );

  return lab.link ? (
    <a href={lab.link} target="_blank" rel="noopener noreferrer" className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0047ba]">
      {card}
    </a>
  ) : card;
}
