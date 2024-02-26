import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../pages/MainPage";


import UserPage from "../pages/UserPage";

import SignUp from "../components/auth/SignUp";
import { PrivateRoute } from "./PrivateRoute";
import SignIn from "../components/auth/SignIn";
const {role} =JSON.parse(localStorage.getItem("auth")) || {}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (  <PrivateRoute
          Component={<MainPage />}
          fallBackPath={"/"}
          isAllowed={!role}
        />)
      },
      {
        path: "user",
        element: (
          <PrivateRoute
            Component={<UserPage />}
            fallBackPath="/"
            isAllowed={role}
          />
        ),
      },
      
    ],
  },
  {
    path: "login",
    element: (
      <PrivateRoute
        Component={<SignIn/>}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },
  {
    path: "register",
    element: (
      <PrivateRoute
        Component={<SignUp/>}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },
 
]);
