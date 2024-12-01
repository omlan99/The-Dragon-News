import { Link } from "react-router-dom";
import icon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-2 ">
            <div>

            </div>
            <div className="nav flex  gap-3">
                <Link to='/'>Home</Link>
                <Link to='news'>About</Link>
                <Link>Carrer</Link>
            </div>
            <div className="flex gap-2 items-center ">
                <div> <img src={icon} alt="" /></div>
                <button className="btn bg-[#403F3F] text-white font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;