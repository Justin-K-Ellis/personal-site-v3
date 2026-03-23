import type { Tech } from "../../types/interfaces";
import SubTitle from "../SubTitle/SubTitle";
import TechCard from "../TechCard/TechCard";

interface TechContainerProps {
  htmlId: string;
  subtitle: string;
  tech: Tech[];
}

export default function TechContainer(props: TechContainerProps) {
  return (
    <article id={props.htmlId} className="mb-4 md:mb-8">
      <SubTitle text={props.subtitle} />
      <div className="flex md:flex-row flex-col gap-2 md:gap-4 flex-wrap justify-center">
        {props.tech.map((t) => {
          return (
            <TechCard
              key={t.name}
              name={t.name}
              Icon={t.icon}
              color={t.color}
            />
          );
        })}
      </div>
    </article>
  );
}
