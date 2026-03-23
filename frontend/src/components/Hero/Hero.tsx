import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="hero bg-base-200 h-1/2 p-6 mb-6 w-screen ml-[calc(50%-50vw)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Justin Klitgaard</h1>
          <p className="py-6">
            Welcome to my personal site. I'm a fullstack software developer
            living and working in Tokyo. Check out my projects, tech stack, and
            contact info below. You can learn a little more about me in the
            About Me page.
          </p>
          <button className="btn btn-info">
            <Link to={"/contact"}>Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
