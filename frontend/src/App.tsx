import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 w-11/12 md:w-7/10 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
