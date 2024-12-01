import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
             <h2 className="font-semibold ">Login with</h2>
            <div className="flex flex-col gap-3 mt-3">
                <button className="btn"><FaGoogle></FaGoogle>Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;