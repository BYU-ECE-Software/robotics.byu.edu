import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi";
import nextConfig from "@/next.config";

const siteLinks = [
  { href: "/research-labs", label: "Research Labs" },
  { href: "/faculty", label: "Faculty" },
  { href: "/reu", label: "Robotics Pioneers REU" },
  { href: "/get-involved", label: "Get Involved" },
];

const departmentLinks = [
  { href: "https://ece.byu.edu", label: "Electrical & Computer Engineering" },
  { href: "https://me.byu.edu", label: "Mechanical Engineering" },
  { href: "https://cs.byu.edu", label: "Computer Science" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001f3f] text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.15fr] lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-4">
            <Image
              src={`/BYU_monogram_white.png`}
              alt=""
              width={100}
              height={100}
              className="h-11 w-auto"
            />
            <span className="border-l border-white/25 pl-4 text-xl font-bold">
              Robotics at BYU
            </span>
          </Link>
          <p className="mt-7 max-w-sm leading-7 text-white/65">
            Connecting people and disciplines to build intelligent robotic
            systems for the real world.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.facebook.com/BYUECE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BYU ECE on Facebook"
              className="flex size-10 items-center justify-center border border-white/20 transition hover:border-[#7fbeeb] hover:bg-[#7fbeeb] hover:text-[#002e5d]"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/school/byu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BYU on LinkedIn"
              className="flex size-10 items-center justify-center border border-white/20 transition hover:border-[#7fbeeb] hover:bg-[#7fbeeb] hover:text-[#002e5d]"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-[#7fbeeb]">
            Explore
          </h2>
          <ul className="mt-6 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-[#7fbeeb]">
            Across BYU
          </h2>
          <ul className="mt-6 space-y-3">
            {departmentLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                >
                  {link.label}
                  <FiArrowUpRight aria-hidden="true" className="text-xs opacity-50" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-7 space-y-3 border-t border-white/15 pt-6 text-sm text-white/60">
            <p className="flex gap-3">
              <FiMapPin aria-hidden="true" className="mt-1 shrink-0 text-[#7fbeeb]" />
              450 Engineering Building, Provo, UT 84602
            </p>
            <a href="mailto:romanv7@byu.edu" className="flex items-center gap-3 hover:text-white">
              <FiMail aria-hidden="true" className="shrink-0 text-[#7fbeeb]" />
              romanv7@byu.edu
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Brigham Young University</p>
          <div className="flex gap-5">
            <a href="https://www.byu.edu/privacy" className="hover:text-white">Privacy</a>
            <a href="https://www.byu.edu/accessibility" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
