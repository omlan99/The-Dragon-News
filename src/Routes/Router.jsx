import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Component/Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";
import NewsDetails from "../Component/Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

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
        path : '/news/:id',
        element : <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
        loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
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