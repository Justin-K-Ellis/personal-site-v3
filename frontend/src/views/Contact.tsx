import Title from "../components/Title/Title";
import contactData from "../assets/contactData";
import ContactCard from "../components/ContactCard/ContactCard";

export default function Contact() {
  const linkedin = contactData[0];
  const github = contactData[1];

  return (
    <section
      id="contact"
      className="mt-4 md:mt-8 flex flex-col items-center gap-2"
    >
      <Title text="Contact" />
      <p>You can get in touch with me here:</p>
      <article className="flex justify-center mt-4 md:mt-8">
        <ContactCard contact={github} />

        <div className="divider divider-horizontal" />

        <ContactCard contact={linkedin} />
      </article>
    </section>
  );
}
