import type { IconType } from "react-icons";

interface TechCardProps {
  name: string;
  Icon: IconType;
  color: string;
}

export default function TechCard({ name, Icon, color }: TechCardProps) {
  return (
    <article className="shadow rounded-sm flex gap-2 justify-center items-center p-4 md:w-1/3 bg-base-200">
      <div className={`${color} text-2xl`}>
        <Icon />
      </div>
      <p className="font-mono">{name}</p>
    </article>
  );
}
