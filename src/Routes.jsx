import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import Userform from "./pages/Userform";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/adminpanel",
        element: <AdminPanel />,
      },
      {
        path: "/employee/userform",
        element: <Userform />,
      },
    ],
  },
]);
