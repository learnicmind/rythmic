import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Error404 from "../pages/Error404/Error404";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/DashBoard";
import MyClasses from "../pages/DashBoard/MyClasses/MyClasses";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUser";
import AdminRoute from "./AdminRoute";



export const router = createBrowserRouter([
    {
        path: "*",
        element: <Error404></Error404>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
          },
        //   {
        //     path: 'payment',
        //     element: <MyClasses></MyClasses>
        //   },
          {
            path: 'allusers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
        //   {
        //     path: 'enrolledstudents',
        //     element: <EnrolledClasses></EnrolledClasses>
        //   }
        ]
      }
])


