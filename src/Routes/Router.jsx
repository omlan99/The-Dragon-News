import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout></HomeLayout>
    },
    {
        path : 'news',
        element : <h1>This is News Layour</h1>
    },
    {
        path : 'auth',
        element : <h1>This is the login Page</h1>,
    },
    
])


export default Router;