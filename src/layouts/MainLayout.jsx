import NavBar from "../components/NavBar";
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function MainLayout({children}) {
    return (

    <>
        <NavBar />
        <div className="bg-[#b6b4ff] flex my-10">
            {children}
        </div>
    </>
)
}
