import Title from "../components/Title/Title";
import aboutMe from "../assets/aboutMeData";

export default function About() {
  return (
    <section className="flex flex-col gap-2 md:w-1/2 mx-auto">
      <div className="my-4 md:my-8">
        <Title text="About Me" />
      </div>
      {aboutMe.map((info) => (
        <p key={info} className="text-justify">
          {info}
        </p>
      ))}
    </section>
  );
}
