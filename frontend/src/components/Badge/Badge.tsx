interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  return <div className="badge badge-outline badge-primary">{props.text}</div>;
}
