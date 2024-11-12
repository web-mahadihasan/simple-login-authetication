import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ForgotPassword from "../Pages/ForgotPassword";
import LoginTest from "../Pages/LoginText";
import LoginPage from "../Pages/LoginPage";
import SuccessForgot from "../Pages/SuccessForgot";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <LoginTest/>,
            children: [
              {
                path: "/login",
                element: <LoginPage/>,
              },
              {
                path: "/login/loginpage",
                element: <LoginPage/>,
              },
              {
                path: "/login/forgot",
                element: <ForgotPassword/>,
              },
              {
                path: "/login/forgot-success",
                element: <SuccessForgot/>,
              },
            ]
        },
        {
            path: "/singup",
            element: <Signup/>
        }
      ]
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);


  export default Router