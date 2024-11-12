import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import toast from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullName] = useState("");
  const [singUpEmail, setSingUpEmail] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [signUpPassword, setSingUpPassword] = useState("");
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isInvalidRePassword, setIsInvalidRePassword] = useState(false);
  const [ischecked, setIsChecked] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate()

  const handleFName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const handleLName = (e) => {
    const lastName = e.target.value;
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
  };
  // handle sign up email 
  const handleSingUpEmail = (e) => {
    const singUpEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(singUpEmail);
    if (isValidEmail) {
      setSingUpEmail(singUpEmail);
      setIsInvalidEmail(false);
    } else {
      setIsInvalidEmail(true);
    }
  };
  // handle sing up password 
  const handleSingUpPassword = (e) => {
    const password = e.target.value;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    if (isValidPassword) {
      setSingUpPassword(password);
      setIsInvalidPassword(false);
    } else {
      setIsInvalidPassword(true);
    }
  };
  // handle re-password 
  const handleRePassword = (e) => {
    const rePassword = e.target.value;
    if (rePassword !== signUpPassword) {
      setIsInvalidRePassword(true);
    } else {
      setIsInvalidRePassword(false);
    }
  };
  // handle terms and conditions 
  const handleTermsCondition = (e) => {
    const setChecked = e.target.checked;
    setIsChecked(!setChecked)
  }

  // sign up submit 
  const handleSingInSubmit = (e) => {
    e.preventDefault();
      createUserWithEmailAndPassword(auth, singUpEmail, signUpPassword)
      .then((result) => {
        console.log(result.user);
        sendEmailVerification(auth.currentUser)
        .then(()=> {
          toast.success(`Account create successfull`)
          navigate("/login")
        })
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  // sign up with providers 
  const handleSignUpWithProviders = (signUpProviders) => {
    signInWithPopup(auth, signUpProviders)
      .then((result) => {
        toast.success(`Account create successfull with ${signUpProviders}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
      <div className="flex flex-col lg:flex-row gap-2 justify-between h-[550px] border bg-base-100 shadow-lg max-w-4xl flex-1 rounded-2xl">
        <div className="  flex items-center justify-center flex-1  rounded-r-2xl p-4 duration-700 ease-in-out transition-all">
          <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold">SIGN UP</h3>
            <div>
              <form onSubmit={handleSingInSubmit} className="space-y-4 mt-6">
                <div className=" flex gap-3">
                  <label htmlFor="">
                    <input
                      onChange={handleFName}
                      type="text"
                      className="px-2 py-2 rounded-md bg-gray-300 text-black outline-none flex-1 border focus-within:border-accent"
                      name="fName"
                      id="fName"
                      placeholder="First Name*"
                      required
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      onChange={handleLName}
                      type="text"
                      className="px-2 py-2 rounded-md bg-gray-300 text-black outline-none flex-1 border focus-within:border-accent"
                      name="lName"
                      id="lName"
                      placeholder="Last Name*"
                      required
                    />
                  </label>
                </div>
                <label
                  htmlFor=""
                  className={`px-4 py-2 rounded-md bg-gray-300 w-full my-2 flex items-center border  ${
                    isInvalidEmail
                      ? " focus-within:border-red-400"
                      : "focus-within:border-accent"
                  } `}
                >
                  <input
                    onChange={handleSingUpEmail}
                    type="email"
                    className=" text-black outline-none flex-1 bg-gray-300 "
                    name="email"
                    id="email"
                    placeholder="Enter email*"
                    required
                  />
                  <MdEmail size={20} className="text-gray-600" />
                </label>
                {isInvalidEmail && (
                  <p className="text-sm text-red-500 text-left">
                    Your Enter email is invalid!
                  </p>
                )}
                {/* Password  */}
                <label
                  htmlFor=""
                  className="px-4 py-2 rounded-md bg-gray-300 w-full my-2 flex items-center border focus-within:border-accent"
                >
                  <input
                    onChange={handleSingUpPassword}
                    type={showPassword ? "text" : "password"}
                    className=" text-black outline-none flex-1 bg-transparent"
                    name="password"
                    required
                    id="password"
                    placeholder="Enter password*"
                  />
                  <button onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <FaEye size={20} className="text-gray-600" />
                    ) : (
                      <FaEyeSlash size={20} className="text-gray-600" />
                    )}
                  </button>
                </label>
                {isInvalidPassword && (
                  <p className="text-sm text-left text-red-500">
                    Password should be at least one uppercase, lower case,
                    special character and length 8 digit
                  </p>
                )}

                {/* Re password  */}
                <label
                  htmlFor=""
                  className="px-4 py-2 rounded-md bg-gray-300 w-full my-2 flex items-center border focus-within:border-accent"
                >
                  <input
                    onChange={handleRePassword}
                    type={showRePassword ? "text" : "password"}
                    className=" text-black outline-none flex-1 bg-transparent"
                    name="rePassword"
                    required
                    id="rePassword"
                    placeholder="Enter re-password*"
                  />
                  <button onClick={() => setShowRePassword(!showRePassword)}>
                    {showRePassword ? (
                      <FaEye size={20} className="text-gray-600" />
                    ) : (
                      <FaEyeSlash size={20} className="text-gray-600" />
                    )}
                  </button>
                </label>
                {isInvalidRePassword && (
                  <p className="text-sm text-left text-red-500">
                    Your password don't match
                  </p>
                )}
                {/* Checkbox  */}
                <div className="form-control">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      onChange={handleTermsCondition}
                      type="checkbox"
                      className="checkbox"
                    />
                    <span className="label-text text-base text-black/70">Accept our terms and condition</span>
                  </label>
                </div>

                <button className="px-6 py-2 border border-accent w-full rounded-lg text-accent font-medium hover:bg-accent duration-300 hover:text-black focus:bg-accent focus:text-black" disabled={ischecked}>
                  Sign up
                </button>
              </form>
            </div>
            <div className="divider px-12 text-black/50">OR Sign up with</div>
            <div className="space-x-4 mt-4">
              <button
                onClick={() => handleSignUpWithProviders(googleProvider)}
                className="p-3 border border-gray-600/30 rounded hover:border-accent focus:border-accent duration-300"
              >
                <FcGoogle size={22} />
              </button>
              <button
                onClick={() => handleSignUpWithProviders(githubProvider)}
                className="p-3 border border-gray-600/30 rounded hover:border-accent focus:border-accent duration-300"
              >
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

        {/* Sing up form  */}
        <div className="flex-1 text-white bg-accent rounded-l-[200px] flex flex-col items-center justify-center">
          <h3 className="text-4xl mb-2 font-bold">Hey, Welcome</h3>
          <p className="text-lg font-medium mb-4">Already have an account?</p>
          <Link
            to={"/login"}
            className="px-6 py-2 border border-base-200 rounded-lg font-medium"
          >
            Log in here..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
