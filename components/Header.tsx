"use client";

import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Navbar from "./Navbar";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#002e5d]/95 text-white shadow-[0_8px_30px_rgba(0,31,63,.12)] backdrop-blur-xl">
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-[60] -translate-y-full bg-white px-4 py-2 font-bold text-[#002e5d] focus:translate-y-2"
      >
        Skip to content
      </a>
      <div className="container-wide flex h-[76px] items-center justify-between gap-6">
        <div className="flex min-w-0 items-center">
          <a
            href="https://www.byu.edu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Brigham Young University homepage"
            className="group flex shrink-0 items-center gap-3 border-r border-white/25 pr-4"
          >
            <Image
              src={`/BYU_monogram_white.png`}
              alt=""
              width={100}
              height={100}
              className="h-9 w-auto"
            />
            <FiExternalLink
              aria-hidden="true"
              className="hidden text-xs text-white/50 transition group-hover:text-white sm:block"
            />
          </a>
          <Link
            href="/"
            className="ml-4 truncate text-xl font-bold tracking-[-0.025em] sm:text-2xl"
          >
            Robotics
            <span className="ml-2 hidden text-sm font-medium text-[#7fbeeb] sm:inline">
              at BYU
            </span>
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
