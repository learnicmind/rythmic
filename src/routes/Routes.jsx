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
import ManageClasses from "../pages/DashBoard/ManageClasses";
import AddClass from "../pages/DashBoard/InstructorClass/AddClass";
import InstructorClass from "../pages/DashBoard/InstructorClass/InstructorClass";
import Update from "../pages/DashBoard/Update/Update";
import EnrolledClasses from "../pages/DashBoard/EnrolledClasses/EnrolledClasses";



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
          {
            path: 'allusers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
          {
            path: 'manageclasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: 'addclass',
            element: <AddClass></AddClass>
          },
          {
            path: 'instructorclass',
            element: <InstructorClass></InstructorClass>
          },
          {
            path: 'classes/:id',
            element: <Update></Update>,
            loader: ({params}) => fetch(`https://rythmic-server.vercel.app/classes/${params.id}`)
          },
          {
            path: 'enrolledclasses',
            element: <EnrolledClasses></EnrolledClasses>
          }
        ]
      }
])


