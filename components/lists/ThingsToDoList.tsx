import Link from "next/link";
import { ThingToDo } from "@/utils/types";

export default function ThingsToDoList({ items }: { items: ThingToDo[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1">
      {items.map((t, i) => (
        <li key={i} className="marker:text-slate-400">
          {t.url ? (
            <Link
              href={t.url}
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              {t.title}
            </Link>
          ) : (
            <span>{t.title}</span>
          )}
          {t.note && <span className="text-slate-600"> — {t.note}</span>}
        </li>
      ))}
    </ul>
  );
}
