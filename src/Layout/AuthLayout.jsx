import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <h1>This is auth page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;