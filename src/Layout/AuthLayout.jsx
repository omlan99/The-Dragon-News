import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-popins bg-[#f3f3f3]">
            <header>
                <Navbar></Navbar>
            </header>                
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;