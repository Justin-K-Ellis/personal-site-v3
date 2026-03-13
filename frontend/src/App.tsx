import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 md:w-1/2 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
