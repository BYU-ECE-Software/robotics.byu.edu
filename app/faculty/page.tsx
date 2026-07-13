import PageHero from "@/components/PageHero";
import ProfessorCard from "@/components/cards/ProfessorCard";
import { professors } from "@/data/professors";

export const metadata = {
  title: "Faculty | Robotics at BYU",
  description: "Meet faculty conducting robotics research across BYU.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        title="Faculty"
        subtitle="Researchers and mentors advancing robotics across engineering and computer science."
        image="/images/heroes/speakers-hero.jpg"
        position="center 52%"
      />
      <section className="bg-[#f2f5f7] py-20 sm:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow">People behind the robots</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
              Expertise that crosses boundaries.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our faculty bring together controls, perception, planning,
              mechanical design, artificial intelligence, and field experience.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {professors.map((professor) => (
              <ProfessorCard key={professor.id} professor={professor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
