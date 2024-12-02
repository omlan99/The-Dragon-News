import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Component/Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";

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
                element : <CategoryNews></CategoryNews>,
                loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            }
        ],
    },
    {
        path : 'news',
        element : <h1>This is News Layour</h1>
    },
    {
        path : 'auth',
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path: "login",
                element : <h2>Added Login page</h2>,
            },
            {
                path : "register",
                element : <h2>This is register</h2>,
            },

        ]
    }
    
])


export default Router;