import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
             <h2 className="font-semibold ">Find us on</h2>
             <div className="join join-vertical flex mt-3 bg-base-100]">
                <button className="btn join-item justify-start">
                    <FaFacebook className="text-blue-900"></FaFacebook> facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter className="text-blue-400"></FaTwitter> Twitter
                </button>
             </div>
        </div>
    );
};

export default FindUs;