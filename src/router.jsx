import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import NotFound from "./components/NotFound";
import Form from "./pages/Form";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/index", element: <Home /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/city", element: <Cities /> },
        { path: "/city/:city_id", element: <CityDetail /> },
        { path: "/auth/signup", element: <Form/>},
        { path: "/*", element: <NotFound /> },

    ],
  },
]);
export default router;
