import Image from "next/image";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCpu,
  FiDisc,
  FiNavigation,
  FiTarget,
  FiWind,
  FiZap,
} from "react-icons/fi";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Student Clubs | Robotics at BYU",
  description:
    "Find BYU student clubs and teams where you can design, build, and compete with robotic systems.",
};

const clubs = [
  {
    name: "BYU Robotics Club",
    focus: "Autonomous systems on the water",
    description:
      "Join a multidisciplinary team preparing an autonomous surface vehicle for RoboBoat, with plans to grow toward the RobotX competition.",
    href: "https://yrobotics.byu.edu",
    icon: FiNavigation,
    skills: ["Autonomy", "Marine systems", "RoboNation"],
    image: "/images/clubs/byu-robotics.jpg",
    imagePosition: "center 42%",
    imageClass: "scale-[1.02] group-hover:scale-[1.05]",
  },
  {
    name: "Agricultural Robotics",
    focus: "Robotics for the field",
    description:
      "Apply sensing, automation, machine learning, and mechanical design to real agricultural challenges.",
    href: "https://clubs.byu.edu/link/club/18295873488778473",
    icon: FiCpu,
    skills: ["Automation", "Machine learning", "Field systems"],
    image: "/images/clubs/agricultural-robotics.jpg",
    imagePosition: "center 40%",
    imageClass: "scale-[1.02] group-hover:scale-[1.05]",
  },
  {
    name: "Combat Robotics",
    focus: "Design, build, compete",
    description:
      "Design, fabricate, and test combat robots while learning practical engineering skills and competing in the arena.",
    href: "https://combatrobotics.byu.edu/",
    icon: FiZap,
    skills: ["CAD", "Fabrication", "Electronics"],
    image: "/images/clubs/combat-robotics.jpg",
    imagePosition: "center 46%",
    imageClass: "scale-[1.02] group-hover:scale-[1.05]",
  },
  {
    name: "Spacecraft Club",
    focus: "From first build to flight",
    description:
      "Build spacecraft engineering skills through beginner-friendly hardware projects, then grow toward advanced satellite and flight systems work.",
    href: "https://spacecraft.byu.edu/club",
    icon: FiTarget,
    skills: ["Embedded systems", "Controls", "Team projects"],
    image: "/images/clubs/spacecraft.jpg",
    imagePosition: "center 48%",
    imageClass: "scale-[1.02] group-hover:scale-[1.05]",
  },
  {
    name: "Mars Rover Team",
    focus: "Planetary exploration",
    description:
      "Help develop a competition rover that navigates rugged terrain, completes technical tasks, and operates autonomously.",
    href: "https://marsrover.byu.edu/",
    icon: FiDisc,
    skills: ["Autonomy", "Mechatronics", "Systems engineering"],
    image: "/images/clubs/mars-rover-hero.jpg",
    imagePosition: "center 56%",
    imageClass: "scale-[1.02] group-hover:scale-[1.05]",
  },
  {
    name: "Aeronautics",
    focus: "Design for flight",
    description:
      "Explore aircraft design, aerospace systems, technical projects, and professional development through BYU's AIAA student chapter.",
    href: "https://aiaa.byu.edu/",
    icon: FiWind,
    skills: ["Aircraft design", "Aerospace systems", "AIAA"],
    image: "/images/clubs/aeronautics.jpg",
    imagePosition: "center 45%",
    imageClass: "scale-[1.02] group-hover:scale-[1.05]",
  },
];

export default function ClubsPage() {
  return (
    <>
      <PageHero
        title="Student clubs"
        subtitle="Find your people. Build something real. Learn by doing."
        image="/images/clubs/mars-rover-hero.jpg"
        position="center 54%"
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Learn together</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
                Your first robotics team can start here.
              </h2>
            </div>
            <div className="max-w-2xl lg:pt-8">
              <p className="text-lg leading-8 text-slate-600">
                Clubs are one of the fastest ways to turn classroom knowledge
                into hands-on experience. You can contribute at any stage—from
                learning the tools to leading a subsystem—and meet students
                across engineering, computer science, and the physical sciences.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-2">
            {clubs.map((club, index) => {
              const Icon = club.icon;
              return (
                <article
                  key={club.name}
                  className="group flex min-h-[590px] flex-col overflow-hidden bg-white"
                >
                  <div className="relative h-56 shrink-0 overflow-hidden sm:h-60 lg:h-56">
                    <Image
                      src={club.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={`object-cover transition duration-500 ${club.imageClass}`}
                      style={{ objectPosition: club.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002e5d]/45 via-transparent to-transparent" />
                    {/* <span className="absolute right-6 top-6 font-mono text-xs text-white/80">
                      0{index + 1}
                    </span> */}
                  </div>

                  <div className="flex flex-1 flex-col p-8 pt-0 sm:p-10 sm:pt-0">
                    <span className="relative z-10 -mt-6 mb-8 flex size-12 items-center justify-center bg-white text-xl text-[#0047ba] shadow-[0_8px_24px_rgba(0,31,63,.18)] ring-4 ring-white">
                      <Icon aria-hidden="true" />
                    </span>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0047ba]">
                      {club.focus}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-[#002e5d] sm:text-3xl">
                      {club.name}
                    </h3>
                    <p className="mt-4 max-w-xl leading-7 text-slate-600">
                      {club.description}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${club.name} focus areas`}>
                      {club.skills.map((skill) => (
                        <li
                          key={skill}
                          className="border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={club.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#002e5d]"
                    >
                      Visit {club.name}
                      <FiArrowUpRight
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f7] py-16 sm:py-20">
        <div className="container-wide flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Keep exploring</p>
            <h2 className="mt-3 text-2xl font-bold text-[#002e5d] sm:text-3xl">
              Looking for another kind of team?
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              BYU&apos;s official directory has the most current list of
              university clubs and student academic associations.
            </p>
          </div>
          <a
            href="https://clubs.byu.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 bg-[#0047ba] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#002e5d]"
          >
            Search all BYU clubs
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
