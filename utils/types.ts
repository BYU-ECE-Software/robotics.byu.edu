import { ReactNode } from "react";

export type Speaker = {
  id: string;
  name: string;
  image?: string;
  affiliation?: string;
  bio?: string;
  link?: string;
};

export type Organizer = {
  id: string;
  name: string;
  affiliation?: string;
  role?: string;
  image?: string;
  link?: string;
};

export type Presentation = {
  id: string;
  title: string;
  speakers: string[]; // names
  abstract?: string;
  slides?: string; // URL
  video?: string; // URL
  time?: string; // e.g., "Day 1 — 10:30–11:00"
};

export type ScheduleEvent = {
  id: string;
  dayIndex: number; // 0=Mon ... 4=Fri
  start: string; // "HH:MM"
  end: string; // "HH:MM"
  title: string;
  speakers?: string[];
  location?: string;
  variant?: "Short Tutorial" | "Long Tutorial" | "Lunch and Posters" | "Lunch" | "Break" | "Excursion" | "Goodbye" | "Breakfast";
};

export type Poster = {
  id: string;
  title: string;
  authors: string[];
  pdf?: string; // URL
  session?: string;
};

export type Sponsor = {
  id: string;
  name: string;
  logo?: string; // image path
  link?: string; // URL
};

export type ThingToDo = {
  title: string;
  url?: string;
  note?: string;
};

export type FAQ = {
  question: string;
  answer: ReactNode;
};
