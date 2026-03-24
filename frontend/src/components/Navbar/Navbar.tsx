import { Link } from "react-router";
import links from "../../assets/navLinks";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Justin Klitgaard
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/contact"} className="btn bg-info">
              Contact
            </Link>
          </li>
          <li className="mt-1 mx-1 md:mx-2">
            <details>
              <summary>More</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                {links.map((link) => (
                  <li key={link.url}>
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
