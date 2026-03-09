import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav>
      <Button variant="primary" type="button">
        Primary
      </Button>
      <Button variant="secondary" type="button">
        Secondary
      </Button>
      <Button variant="accent" type="button">
        Accent
      </Button>
    </nav>
  );
}
