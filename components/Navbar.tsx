"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "/research-labs", label: "Research" },
  { href: "/faculty", label: "Faculty" },
  { href: "/reu", label: "REU" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 items-center justify-center border border-white/25 text-xl transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav aria-label="Primary" className="hidden items-center lg:flex">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`relative px-3 py-7 text-sm font-semibold transition-colors xl:px-4 ${
                active ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 bottom-0 h-[3px] bg-[#7fbeeb] transition-transform xl:inset-x-4 ${
                  active ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-[#002e5d] shadow-2xl lg:hidden"
        >
          <nav aria-label="Mobile menu" className="container-wide py-4">
            {links.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-lg font-bold"
                >
                  <span className={active ? "text-[#7fbeeb]" : "text-white"}>
                    <span className="mr-4 font-mono text-xs font-normal text-white/35">
                      0{index + 1}
                    </span>
                    {link.label}
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="text-white/40 transition group-hover:text-white"
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
