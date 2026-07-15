import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robotics at BYU",
  description:
    "Explore robotics research, faculty, laboratories, and student opportunities at Brigham Young University.",
  metadataBase: new URL("https://byu-ece-software.github.io/"),
  icons: {
    icon: {
      url: "/favicon.ico",
      href: "/favicon.ico",
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
        className={`${inter.className} bg-white text-[var(--foreground)] antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
