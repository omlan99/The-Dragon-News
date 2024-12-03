import { Link } from "react-router-dom";
import icon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const {user, logout} = useContext(AuthContext)
    console.log(user)
    return (
        <div className="flex justify-between items-center px-2 ">
            <div>
                {user && user.email }
            </div>
            <div className="nav flex  gap-3">
                <Link to='/'>Home</Link>
                <Link to='news'>About</Link>
                <Link>Carrer</Link>
            </div>
            <div className="flex gap-2 items-center ">
                <div> <img src={icon} alt="" /></div>
                {
                    user && user?.email ? <button onClick={logout} className="btn bg-[#403F3F] text-white font-semibold">Logout</button> : <Link to='auth/login' className="btn bg-[#403F3F] text-white font-semibold">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;