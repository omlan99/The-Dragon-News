import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Component/Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";

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
                element : <Login></Login>,
            },
            {
                path : "register",
                element : <Register></Register>,
            },

        ]
    }
    
])


export default Router;