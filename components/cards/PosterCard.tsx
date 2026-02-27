import Link from "next/link";
import { Poster } from "@/utils/types";

export default function PosterCard({ poster }: { poster: Poster }) {
  return (
    <article className="card card-hover p-4">
      <h3 className="font-semibold">{poster.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{poster.authors.join(", ")}</p>
      {poster.pdf && (
        <Link
          className="mt-3 inline-block underline hover:no-underline"
          href={poster.pdf}
          target="_blank"
          rel="noreferrer"
        >
          View PDF
        </Link>
      )}
    </article>
  );
}
