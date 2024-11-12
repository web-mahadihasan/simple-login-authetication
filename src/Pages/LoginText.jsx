import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { Result } from "postcss";
import toast from "react-hot-toast";

const LoginTest = () => {

  
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
      <div className="flex gap-2 justify-between h-[550px] border bg-base-100 shadow-lg max-w-4xl flex-1 rounded-2xl">
        <div className="flex-1 text-white bg-accent rounded-r-[200px] rounded-l-2xl flex flex-col items-center justify-center">
          <h3 className="text-4xl mb-2 font-bold">Welcome Back</h3>
          <p className="text-lg font-medium mb-4">Don't have an account?</p>
          <Link
            to={"/singup"}
            className="px-6 py-2 border border-base-200 rounded-lg font-medium"
          >
            Sign up here..
          </Link>
        </div>
        <div className="flex items-center justify-center flex-1  rounded-r-2xl p-6 ">
          <Outlet/>
          {/* last  */}
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
