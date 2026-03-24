// This component is not currently in use. TODO: determine how to use this or delete.

interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  return <div className="badge badge-outline badge-primary">{props.text}</div>;
}
