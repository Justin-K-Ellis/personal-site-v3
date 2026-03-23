import contacts from "../../assets/contactData";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 items-center p-4">
      <aside className="grid-flow-col items-center">
        <p> {new Date().getFullYear()} - Justin Klitgaard</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {contacts.map((info) => (
          <a href={info.url} key={info.url} className="text-3xl">
            {<info.Icon />}
          </a>
        ))}
      </nav>
    </footer>
  );
}
