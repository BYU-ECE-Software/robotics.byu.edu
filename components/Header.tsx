"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-slate-200 md:w-screen bg-byuNavy text-white py-4 shadow-md">
      {/* Removed container-wide class */}
      <div className="px-6 py-1 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Link href="https://www.byu.edu" className="flex-shrink-0 mr-4 border-r-[1px] border-byuRoyal">
            <Image 
              src={NEXT_PUBLIC_BASE_PATH + "/BYU_monogram_white.png"}
              alt="BYU Logo" 
              width={100} 
              height={100}
              className="rounded h-10 w-auto"
            />
          </Link>
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            Robotics
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
