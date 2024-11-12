import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { Result } from "postcss";
import toast from "react-hot-toast";

const Login = () => {

  const [loginEmail, setLoginEmail] = useState("")
  const [invalidLoginEmail, setInvalidLoginEmail] = useState(false)
  const [loginPassword, setLoginPassword] = useState("")
  const [invalidLoginPassword, setInvalidLoginPassword] = useState(false)
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showError, setShowError] = useState("")


  // handle sign up email 
  const handleLogInEmail = (e) => {
    const singUpEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(singUpEmail);
    if (isValidEmail) {
      setLoginEmail(singUpEmail);
      setInvalidLoginEmail(false);
    } else {
      setInvalidLoginEmail(true);
    }
  };

  // handle login password
  const handleLoginPassword = (e) => {
    const password = e.target.value;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    if (isValidPassword) {
      setLoginPassword(password);
      setInvalidLoginPassword(false);
    } else {
      setInvalidLoginPassword(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((Result) => {
      toast.success("User Successfully log in")
    }).catch((error) => {
      console.log(error.message)
      console.log(error.code)
      if(error.code == "auth/invalid-credential"){
        setShowError("Your Email or Password is not valid. Enter valid email and password")
      }
    })
  }
  const handleForgotPassword = () => {
  }
  
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
          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold">LOGIN</h3>
            <div>
              {
                showError && <p className="my-6 text-red-500 font-medium text-left">{showError}</p>
              }
              <form onSubmit={handleLogin} className="space-y-4 mt-6 w-full">
                <div className="px-4 py-2 rounded-md bg-gray-300 w-full my-2 border focus-within:border-accent">
                  <label htmlFor="" className="w-full flex items-center">
                    <input
                      onChange={handleLogInEmail}
                      type="email"
                      className=" text-black outline-none flex-1 bg-transparent w-full"
                      name="email"
                      id=""
                      placeholder="Enter email"
                    />
                    <MdEmail size={20} className="text-gray-600" />
                  </label>
                </div>
                {invalidLoginEmail && (
                  <p className="text-sm text-red-500 text-left">
                    Your Enter email is invalid!
                  </p>
                )}
                {/* Password  */}
                <div className="px-4 py-2 rounded-md bg-gray-300 w-full my-2 border focus-within:border-accent">
                  <label htmlFor="" className=" flex items-center w-full">
                    <input
                      onChange={handleLoginPassword}
                      type={showLoginPassword? "text": "password"}
                      className=" text-black outline-none flex-1 bg-transparent w-full"
                      name="password"
                      id=""
                      placeholder="Enter password"
                    />
                    <button onClick={()=> setShowLoginPassword(!showLoginPassword)}>
                    {showLoginPassword ? (
                      <FaEye size={20} className="text-gray-600" />
                    ) : (
                      <FaEyeSlash size={20} className="text-gray-600" />
                    )}
                    </button>
                  </label>
                </div>
                {invalidLoginPassword && (
                  <p className="text-sm text-left text-red-500">
                    Password should be at least one uppercase, lower case,
                    special character and length 8 digit
                  </p>
                )}
                <div className="text-left">
                <button onClick={handleForgotPassword} className="hover:text-blue-600 duration-300 text-black/65">Forgot password?</button>
                </div>
                {/* Re password  */}
                <button className="px-6 py-2 border border-accent w-full rounded-lg text-accent font-medium hover:bg-accent duration-300 hover:text-black focus:bg-accent focus:text-black">
                  Log in
                </button>
              </form>
            </div>
            <div className="divider px-12 text-black/50">OR log in with</div>
            <div className="space-x-4 mt-4">
              <button className="p-3 border border-gray-600/30 rounded hover:border-accent focus:border-accent duration-300">
                <FcGoogle size={22} />
              </button>
              <button className="p-3 border border-gray-600/30 rounded hover:border-accent focus:border-accent duration-300">
                <FaGithub size={22} />
              </button>
              <button className="p-3 border border-gray-600/30 rounded hover:border-accent focus:border-accent duration-300">
                <BsTwitterX size={22} />
              </button>
              <button className="p-3 border border-gray-600/30 rounded hover:border-accent focus:border-accent duration-300">
                <FaFacebookF size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
