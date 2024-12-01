import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import LeftNavbar from "../Component/Layout-component/LeftNavbar";
import RightNavbar from "../Component/Layout-component/RightNavbar";
import Navbar from "../Component/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-popins container mx-auto">
            <header>
                <Header></Header>
                <section className=" w-11/12 mx-auto ">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="col-span-6"><Outlet></Outlet> </section>
                <aside className="col-span-3"><RightNavbar></RightNavbar></aside>

            </main>
        </div>
    );
};

export default HomeLayout;