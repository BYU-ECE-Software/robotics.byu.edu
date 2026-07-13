import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiBook, FiCode, FiCpu, FiSettings } from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Resources | Robotics at BYU",
  description: "Useful robotics, academic, and department resources at BYU.",
};

const departments = [
  { name: "Electrical & Computer Engineering", href: "https://ece.byu.edu", icon: FiCpu },
  { name: "Mechanical Engineering", href: "https://me.byu.edu", icon: FiSettings },
  { name: "Computer Science", href: "https://cs.byu.edu", icon: FiCode },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="A starting point for navigating robotics research and academics at BYU."
        image="/images/heroes/hero-default.jpg"
        position="center 48%"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow">Academic connections</p>
              <h2 className="mt-4 text-3xl font-bold text-[#002e5d] sm:text-4xl">Robotics lives across BYU.</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Robotics draws from multiple fields. These departments are the
              best places to explore courses, degrees, faculty, and academic support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {departments.map((department) => {
              const Icon = department.icon;
              return (
                <a key={department.name} href={department.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-64 flex-col border border-slate-200 bg-[#f5f7f9] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#7fbeeb] hover:bg-white hover:shadow-xl">
                  <Icon aria-hidden="true" className="text-3xl text-[#0047ba]" />
                  <h3 className="mt-auto max-w-xs text-xl font-bold text-[#002e5d]">{department.name}</h3>
                  <span className="mt-4 flex items-center gap-2 text-sm font-bold text-[#0047ba]">
                    Visit department <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f7] py-20">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <Link href="/research-labs" className="group flex items-center justify-between gap-6 bg-[#002e5d] p-8 text-white sm:p-10">
            <div>
              <FiBook aria-hidden="true" className="text-3xl text-[#7fbeeb]" />
              <h2 className="mt-6 text-2xl font-bold">Research directory</h2>
              <p className="mt-3 text-white/70">Explore the laboratories advancing robotics at BYU.</p>
            </div>
            <FiArrowRight aria-hidden="true" className="shrink-0 text-2xl transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/get-involved" className="group flex items-center justify-between gap-6 bg-[#0047ba] p-8 text-white sm:p-10">
            <div>
              <FiArrowRight aria-hidden="true" className="text-3xl text-[#b6dcf6]" />
              <h2 className="mt-6 text-2xl font-bold">Ways to participate</h2>
              <p className="mt-3 text-white/75">Find practical next steps for joining the community.</p>
            </div>
            <FiArrowRight aria-hidden="true" className="shrink-0 text-2xl transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
