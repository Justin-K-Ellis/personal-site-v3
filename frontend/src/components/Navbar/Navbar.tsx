import { Link } from "react-router";
import type { LinkInterface } from "../../types/interfaces";

export default function Navbar() {
  const links: LinkInterface[] = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Blog",
      url: "/blog",
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Justin Klitgaard</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="btn">
              <Link to={"/contact"}>Contact</Link>
            </button>
          </li>
          <li className="mt-1 mx-1 md:mx-2">
            <details>
              <summary>More</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                {links.map((link) => (
                  <li>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
