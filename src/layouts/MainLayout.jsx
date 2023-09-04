import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
export default function MainLayout() {
    return (

    <>
    <div className="bg-gray-100 flex-col m-0">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
    </>
)
}
