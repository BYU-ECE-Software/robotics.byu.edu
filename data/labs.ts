import { Lab } from "@/utils/types";


export const labs: Lab[] = [
  {
    id: "l1",
    name: "MAGICC Lab",
    affiliation: "Electrical & Computer Engineering",
    image: "/images/labs/magiccLab.svg",
    bio: "The MAGICC Lab, or Multiple AGent Intelligent Coordination and Control Lab, focuses on research in navigation, guidance, and control for teams of autonomous unmanned aerial vehicles. The lab’s work includes cooperative GPS-denied navigation, UAS autopilot software through ROSflight, and sense-and-avoid methods for micro air vehicles. More broadly, the lab develops algorithms and systems that enable autonomous vehicles to coordinate effectively, operate in challenging environments, and support collaborative robotic missions.",
    link: "https://magicc.byu.edu/",
  },
  {
    id: "l2",
    name: "FROST Lab",
    affiliation: "Electrical & Computer Engineering",
    image: "/images/labs/frost_lab.svg",
    bio: "Field robotics research focused on resilient autonomous systems operating in challenging environments.",
    link: "https://frostlab.byu.edu/",
  },
  {
    id: "l3",
    name: "Robotics and Dynamics Lab",
    affiliation: "Mechanical Engineering",
    image: "/images/labs/RADLab.png",
    bio: "Robotics research spanning dynamics, motion, control, and the design of capable robotic systems.",
    link: "http://radlab.byu.edu/",
  },
];
