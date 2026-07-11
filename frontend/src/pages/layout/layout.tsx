import { Outlet } from "react-router";
import { Header } from "../../components/header/Header";

export default function Layout() {
    return (

        <div className="flex flex-col bg-[#161410] min-h-screen">
            <Header />
            <Outlet />
        </div>


    )
}