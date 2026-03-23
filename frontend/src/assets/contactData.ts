import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import type { Contact } from "../types/interfaces";

const contacts: Contact[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/justin-klitgaard-ellis-384b9965/",
    Icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Justin-K-Ellis",
    Icon: SiGithub,
  },
];

export default contacts;
