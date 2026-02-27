"use client";
import React from "react";
import clsx from "clsx";
import { ScheduleEvent } from "@/utils/types";

/**
 * A clean Mon–Fri time-grid calendar for conference programs.
 *
 * Props:
 * - days: string[] // labels for columns (default Mon–Fri)
 * - start: string // e.g. "08:00"
 * - end: string // e.g. "18:00"
 * - stepMinutes: number // grid step, e.g. 30
 * - events: ScheduleEvent[]
 */
export default function Calendar({
  days = ["Mon", "Tue", "Wed", "Thu", "Fri"],
  start = "08:00",
  end = "20:00",
  stepMinutes = 30,
  events = [],
}: {
  days?: string[];
  start?: string;
  end?: string;
  stepMinutes?: number;
  events?: ScheduleEvent[];
}) {
  const totalMinutes = diffMinutes(start, end);
  const rows = Math.ceil(totalMinutes / stepMinutes);

  return (
    <div className="card p-4">
      {/* Header */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: `100px repeat(${days.length}, minmax(0, 1fr))`,
        }}
      >
        <div></div>
        {days.map((d) => (
          <div key={d} className="px-2 pb-3 text-sm font-medium text-slate-700">
            {d}
          </div>
        ))}
      </div>

      {/* Body grid */}
      <div
        className="relative grid border-t border-slate-200"
        style={{
          gridTemplateColumns: `100px repeat(${days.length}, minmax(0, 1fr))`,
        }}
      >
        {/* Time gutter */}
        <div className="relative">
          {Array.from({ length: rows + 1 }).map((_, i) => {
            const t = addMinutes(start, i * stepMinutes);
            return (
              <div
                key={i}
                className="h-10 -mt-[1px] text-[11px] text-slate-500 flex items-start justify-end pr-2"
              >
                <span className="translate-y-[-7px]">{t}</span>
              </div>
            );
          })}
        </div>

        {/* Columns with horizontal lines */}
        {days.map((d, colIdx) => (
          <div key={d} className="relative border-l border-slate-200">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="h-10 border-b border-slate-100" />
            ))}

            {/* Events for this column */}
            {events
              .filter((e) => e.dayIndex === colIdx)
              .map((e) => {
                const top = (diffMinutes(start, e.start) / stepMinutes) * 40; // 40px per step
                const height = (diffMinutes(e.start, e.end) / stepMinutes) * 40;
                return (
                  <div
                    key={e.id}
                    className={clsx(
                      "absolute left-2 right-2 rounded-lg border text-xs shadow-sm",
                      e.variant === "Short Tutorial" && "bg-blue-50 border-blue-200",
                      e.variant === "Long Tutorial" && "bg-amber-50 border-amber-200",
                      (!e.variant || e.variant === "Lunch" || e.variant === "Breakfast" || e.variant === "Lunch and Posters") &&
                        "bg-emerald-50 border-emerald-200",
                      e.variant === "Excursion" && "bg-purple-50 border-purple-200",
                      e.variant === "Break" && "bg-slate-50 border-slate-200"
                    )}
                    style={{ top, height }}
                    title={`${e.title} — ${e.start}–${e.end}`}
                  >
                    <div className="p-2">
                      <div className="font-medium leading-tight line-clamp-2">
                        {e.title}
                      </div>
                      {e.speakers?.length ? (
                        <div className="mt-1 text-slate-600 line-clamp-2">
                          {e.speakers.join(", ")}
                        </div>
                      ) : null}
                      {e.location ? (
                        <div className="mt-1 text-slate-500">{e.location}</div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      {/* Legend (optional) */}
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
        <span className="inline-flex items-center gap-2">
          <i className="h-3 w-3 rounded bg-emerald-200 inline-block" /> Meal
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="h-3 w-3 rounded bg-amber-200 inline-block" /> Long Tutorial
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="h-3 w-3 rounded bg-blue-200 inline-block" /> Short Tutorial
        </span>
      </div>
    </div>
  );
}

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function diffMinutes(a: string, b: string) {
  return Math.max(0, toMinutes(b) - toMinutes(a));
}
function addMinutes(a: string, m: number) {
  const total = toMinutes(a) + m;
  const hh = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const mm = (total % 60).toString().padStart(2, "0");
  return `${hh}:${mm}`;
}
