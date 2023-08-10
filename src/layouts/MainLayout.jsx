import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function MainLayout() {
    return (

    <>
        <div className="flex flex-col">
            <NavBar />
        </div>
        <div className="bg-[#b6b4ff] flex my-10">
            <Outlet />
        </div>
    </>
)
}
