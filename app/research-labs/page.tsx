import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/PageHero";
import LabCard from "@/components/cards/LabCard";
import { labs } from "@/data/labs";

export const metadata = {
  title: "Research Labs | Robotics at BYU",
  description: "Explore robotics laboratories and research teams at Brigham Young University.",
};

export default function LabsPage() {
  return (
    <>
      <PageHero
        title="Research labs"
        subtitle="Where ideas become systems—and systems meet the real world."
        image="/images/article/drone.jpg"
        position="center 44%"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="eyebrow">Across disciplines</p>
              <div className="mt-5 h-1 w-16 bg-[#0047ba]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
                Designed here. Tested everywhere.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                BYU robotics labs unite students and faculty around autonomy,
                control, field robotics, dynamics, and intelligent systems.
                Explore each team to find its people, projects, and opportunities.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {labs.map((lab, index) => (
              <LabCard key={lab.id} lab={lab} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f7] py-16 sm:py-20">
        <div className="container-wide flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-3 text-3xl font-bold text-[#002e5d]">
              Looking for a research mentor?
            </h2>
          </div>
          <Link href="/faculty" className="group inline-flex items-center gap-3 bg-[#0047ba] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#002e5d]">
            Meet our faculty
            <FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
