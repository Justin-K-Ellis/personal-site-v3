interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  return <div className="badge badge-dash badge-primary">{props.text}</div>;
}
