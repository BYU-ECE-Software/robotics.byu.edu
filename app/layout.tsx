import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robotics",
  description:
    "Join researchers, engineers, and students for talks, posters, and community at the North American School of Information Theory 2026 Conference.",
  metadataBase: new URL("https://byu-ece-software.github.io/NASIT2026/"),
  icons: {
    icon: {
      url: NEXT_PUBLIC_BASE_PATH + "/favicon.ico",
      href: NEXT_PUBLIC_BASE_PATH + "/favicon.ico",
    }
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-(--byu-royal) antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
