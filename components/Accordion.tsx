"use client";
import { useState, ReactNode } from "react";
import { FAQ } from "@/utils/types";

export default function Accordion({ items }: { items: FAQ[] }) {
  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, idx) => (
        <AccordionItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }: { question: string; answer: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <button
        type="button"
        className="group flex w-full items-center justify-between gap-5 py-6 text-left text-[#002e5d]"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-lg font-bold leading-tight sm:text-xl">{question}</span>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-300 transition group-hover:border-[#0047ba] group-hover:bg-[#0047ba] group-hover:text-white">
          <Chevron className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </span>
      </button>

      <div
        className={`overflow-hidden pr-12 text-slate-600 transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-192 pb-7 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* note: no <p> wrapper, because answer may contain multiple blocks */}
        <div className="leading-relaxed space-y-3">{answer}</div>
      </div>
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}
