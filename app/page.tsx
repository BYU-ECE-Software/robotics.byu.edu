import Image from "next/image";
import Link from "next/link";
import {
  FiArrowDown,
  FiArrowRight,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiUsers,
} from "react-icons/fi";

export const metadata = {
  title: "Robotics at BYU",
  description:
    "Discover robotics research, faculty, labs, and student opportunities at Brigham Young University.",
};

const researchAreas = [
  {
    number: "01",
    title: "Autonomous systems",
    description:
      "Advancing how aerial, ground, and marine robots perceive, plan, and act in uncertain environments.",
    icon: FiCpu,
  },
  {
    number: "02",
    title: "Field robotics",
    description:
      "Building resilient robotic systems for work in the ocean, the air, and other demanding environments.",
    icon: FiGlobe,
  },
  {
    number: "03",
    title: "Intelligent collaboration",
    description:
      "Designing algorithms and interfaces that help people and teams of robots accomplish more together.",
    icon: FiUsers,
  },
];

const pathways = [
  {
    eyebrow: "Explore",
    title: "Research labs",
    description:
      "Meet the teams turning ambitious questions into working robotic systems.",
    href: "/research-labs",
  },
  {
    eyebrow: "Connect",
    title: "Faculty",
    description:
      "Find mentors working across engineering, computing, autonomy, and control.",
    href: "/faculty",
  },
  {
    eyebrow: "Participate",
    title: "Get involved",
    description:
      "Discover ways to build, research, and contribute to the robotics community.",
    href: "/get-involved",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#001f3f] text-white lg:min-h-[760px]">
        <Image
          src={`/images/article/drone.jpg`}
          alt="BYU researchers gathered around an autonomous aerial robot"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,31,63,.96)_0%,rgba(0,31,63,.78)_42%,rgba(0,31,63,.2)_78%),linear-gradient(0deg,rgba(0,20,40,.75)_0%,transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="container-wide relative flex min-h-[680px] items-end pb-20 pt-28 lg:min-h-[760px] lg:items-center lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#7fbeeb] sm:text-sm">
              <span className="h-px w-10 bg-[#7fbeeb]" />
              Brigham Young University
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Robotics for the
              <span className="block text-[#7fbeeb]">real world.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              We bring engineers, computer scientists, and students together to
              create intelligent machines that explore, assist, and endure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/research-labs"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 text-sm font-bold text-[#002e5d] transition hover:bg-[#7fbeeb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore our research
                <FiArrowRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex min-h-12 items-center justify-center border border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Get involved
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#discover"
          className="absolute bottom-7 right-7 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white sm:flex lg:right-12"
        >
          Discover
          <span className="flex size-10 items-center justify-center rounded-full border border-white/40">
            <FiArrowDown aria-hidden="true" />
          </span>
        </a>
      </section>

      <section id="discover" className="bg-white py-20 sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0047ba]">
              Built on collaboration
            </p>
            <div className="mt-5 h-1 w-16 bg-[#0047ba]" />
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
              Big ideas move faster when disciplines move together.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              Robotics at BYU connects researchers across electrical and
              computer engineering, mechanical engineering, and computer
              science. That shared expertise turns theory into autonomous
              systems built to make a meaningful impact.
            </p>
            <Link
              href="/faculty"
              className="group mt-8 inline-flex items-center gap-3 border-b-2 border-[#0047ba] pb-1 text-sm font-bold text-[#002e5d]"
            >
              Meet the people behind the work
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f5f7] py-20 sm:py-28">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0047ba]">
                Research focus
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
                Intelligence in motion
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">
              From fundamental algorithms to field-tested platforms, our work
              spans the systems that make autonomy possible.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="group relative min-h-[330px] bg-white p-8 text-[#002e5d] transition-colors hover:bg-[#002e5d] hover:text-white sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      aria-hidden="true"
                      className="text-3xl text-[#0047ba] transition-colors group-hover:text-[#7fbeeb]"
                    />
                    <span className="font-mono text-xs text-slate-400 transition-colors group-hover:text-white/50">
                      {area.number}
                    </span>
                  </div>
                  <div className="absolute inset-x-8 bottom-9 sm:inset-x-10">
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "inherit" }}
                    >
                      {area.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600 transition-colors group-hover:text-white/75">
                      {area.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid bg-[#002e5d] text-white lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[650px]">
          <Image
            src={`/images/article/boat.jpg`}
            alt="Autonomous underwater robots deployed from a research boat"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#0047ba] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] sm:px-8">
            Research beyond the lab
          </div>
        </div>
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-24">
          <div className="max-w-xl">
            <FiLayers aria-hidden="true" className="text-4xl text-[#7fbeeb]" />
            <h2 className="mt-8 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
              Built to go where the questions are.
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/75">
              BYU students and faculty develop robotic systems for complex,
              unstructured environments—from autonomous underwater exploration
              to aerial mapping and multi-agent coordination.
            </p>
            <Link
              href="/research-labs"
              className="group mt-9 inline-flex items-center gap-3 border-b-2 border-[#7fbeeb] pb-1 text-sm font-bold text-white"
            >
              See our labs in action
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-wide">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#0047ba]">
            Find your place
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold tracking-[-0.035em] text-[#002e5d] sm:text-5xl">
            Robotics starts with curiosity.
          </h2>
          <div className="mt-12 grid border-y border-slate-200 lg:grid-cols-3">
            {pathways.map((pathway, index) => (
              <Link
                key={pathway.title}
                href={pathway.href}
                className={`group relative block px-2 py-9 focus-visible:outline-2 focus-visible:outline-[#0047ba] sm:px-8 lg:py-12 ${
                  index !== 0 ? "border-t border-slate-200 lg:border-l lg:border-t-0" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0047ba]">
                  {pathway.eyebrow}
                </p>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-bold text-[#002e5d]">
                    {pathway.title}
                  </h3>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[#002e5d] transition group-hover:border-[#0047ba] group-hover:bg-[#0047ba] group-hover:text-white">
                    <FiArrowRight aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-4 max-w-sm leading-7 text-slate-600">
                  {pathway.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#001f3f] py-24 text-white sm:py-32">
        <Image
          src={`/images/heroes/hero-default.jpg`}
          alt="BYU campus beneath Y Mountain"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#002e5d]/85" />
        <div className="container-wide text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7fbeeb]">
            Research experience for undergraduates
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Spend a summer building what comes next.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            The Robotics Pioneers REU gives undergraduate students hands-on
            experience with real-world robotics research at BYU.
          </p>
          <Link
            href="/reu"
            className="group mt-9 inline-flex min-h-12 items-center gap-3 bg-white px-7 py-3 text-sm font-bold text-[#002e5d] transition hover:bg-[#7fbeeb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore the REU program
            <FiArrowRight
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
