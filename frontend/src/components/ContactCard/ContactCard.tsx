import type { Contact } from "../../types/interfaces";

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard(props: ContactCardProps) {
  return (
    <div className="flex flex-col items-center justify-center  gap-2">
      <a
        href={props.contact.url}
        className="flex flex-col items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-5xl">{<props.contact.Icon />}</div>
        <p className="text-xl">{props.contact.name}</p>
      </a>
    </div>
  );
}
