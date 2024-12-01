import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="p-4 flex bg-base-200 ">
            <p className=" text-white "><span className="py-2 px-6 bg-[#D72050]">Latest</span></p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   1! </Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   2! </Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   3! </Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   4! </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;