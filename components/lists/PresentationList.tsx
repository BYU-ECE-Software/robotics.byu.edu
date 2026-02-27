import Link from "next/link";
import { Presentation } from "@/utils/types";

export default function PresentationList({ items }: { items: Presentation[] }) {
  return (
    <ul className="space-y-4">
      {items.map((p) => (
        <li key={p.id} className="card p-4">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <h3 className="font-semibold leading-tight">{p.title}</h3>
              <p className="text-sm text-slate-600">
                {p.speakers.map((name, i) => {
                  const slug = name.toLowerCase().replace(/\s+/g, "-");

                  return (
                    <span key={name}>
                      <Link
                        href={`/speakers#${slug}`}
                        className="hover:text-[var(--byu-royal)] transition-colors"
                      >
                        {name}
                      </Link>
                      {i < p.speakers.length - 1 && ", "}
                    </span>
                  );
                })}
              </p>
              {p.abstract && (
                <p className="mt-3 text-slate-700">{p.abstract}</p>
              )}
            </div>
            <div className="flex gap-3 text-sm">
              {p.slides && (
                <Link
                  className="underline hover:no-underline"
                  href={p.slides}
                  target="_blank"
                  rel="noreferrer"
                >
                  Slides
                </Link>
              )}
              {p.video && (
                <Link
                  className="underline hover:no-underline"
                  href={p.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  Video
                </Link>
              )}
            </div>
          </div>
          {p.time && <p className="mt-3 text-xs text-slate-500">{p.time}</p>}
        </li>
      ))}
    </ul>
  );
}
