import Link from "next/link";
import { FAQ } from "@/utils/types";

export const faqs: FAQ[] = [
  {
    question: "How can I get involved in robotics research at BYU?",
    answer: (
      <p>
        Do well in your coursework, especially in engineering and computer
        science. Reach out to professors whose research interests align with
        yours. You can also <Link href="/clubs">join a student club</Link> or
        participate in a summer research program.
      </p>
    ),
  },
];
