import { createBrowserRouter } from "react-router";
import App from "./App";

import About from "./views/About";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;
