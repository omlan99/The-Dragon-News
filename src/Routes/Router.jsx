import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout></HomeLayout>,
        children :[
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>

            },
            {
                path : "/category/:id",
                element : <h2>This is category</h2>
            }
        ],
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