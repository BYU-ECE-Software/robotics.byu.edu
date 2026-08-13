import { FiBookOpen, FiCalendar, FiCpu } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import { courses } from "@/data/courses";

export const metadata = {
  title: "Courses | Robotics at BYU",
  description: "Explore BYU courses connected to robotics, autonomy, and intelligent systems.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Courses"
        subtitle="Build a robotics path across engineering, computing, and intelligent systems."
        image="/images/heroes/hero-default.jpg"
        position="center 48%"
      />

      <section className="relative overflow-hidden bg-[#f2f5f7] py-20 sm:py-28">
        <div aria-hidden="true" className="absolute -right-28 top-16 size-80 rounded-full bg-[#7fbeeb]/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-36 bottom-0 size-96 rounded-full bg-[#0047ba]/10 blur-3xl" />

        <div className="container-wide relative">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow">Academic pathways</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#002e5d] sm:text-4xl">
                Learn robotics from every angle.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Robotics brings mechanics, electronics, computation, and autonomy together.
              Use this collection as a starting point, and confirm schedules and prerequisites
              in the current BYU catalog before registering.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <article
                key={course.courseNumber}
                className="group relative flex min-h-80 flex-col overflow-hidden border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7fbeeb] hover:shadow-xl sm:p-8"
              >
                <div aria-hidden="true" className="absolute right-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#0047ba] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 bg-[#e8f3fb] px-3 py-2 font-mono text-sm font-bold tracking-wide text-[#0047ba]">
                    <FiBookOpen aria-hidden="true" />
                    {course.courseNumber}
                  </span>
                  <span className="font-mono text-xs text-slate-300">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3 className="mt-7 text-2xl font-bold leading-tight text-[#002e5d]">
                  {course.title}
                </h3>

                <div className="mt-6 flex items-center gap-2 border-y border-slate-100 py-4 text-sm font-semibold text-slate-600">
                  <FiCalendar aria-hidden="true" className="text-[#0047ba]" />
                  <span className="text-slate-400">When offered</span>
                  <span className="ml-auto text-right text-[#002e5d]">{course.whenOffered}</span>
                </div>

                <div className="mt-6 flex gap-3">
                  <FiCpu aria-hidden="true" className="mt-1 shrink-0 text-lg text-[#0047ba]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Robotics connection
                    </p>
                    <p className="mt-2 leading-7 text-slate-600">
                      {course.relationshipToRobotics}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
