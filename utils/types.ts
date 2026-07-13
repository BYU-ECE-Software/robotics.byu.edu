import type { ReactNode } from "react";

export type Professor = {
  id: string;
  name: string;
  image?: string;
  affiliation?: string;
  bio?: string;
  link?: string;
};

export type Lab = {
  id: string;
  name: string;
  affiliation: string;
  image: string;
  bio: string;
  link: string;
};

export type FAQ = {
  question: string;
  answer: ReactNode;
};
