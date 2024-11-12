import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import auth from "../firebase/firebase.init";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [forgotEmail, setForgotEmail] = useState("");
    const [invalidForgotEmail, setInvalidForgotEmail] = useState("")
    const navigate = useNavigate()

    const handleForgotEmail = (e) =>{
    const singUpEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(singUpEmail);
    if (isValidEmail) {
        setForgotEmail(singUpEmail);
        setInvalidForgotEmail(false);
    } else {
        setInvalidForgotEmail(true);
    }
    }
    const handleForgotPassword = (e) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, forgotEmail)
        .then(()=> {
            toast.success("Verification Email sent")
            navigate("/login/forgot-success")
        }).catch((error) => {
            toast.error("Failed to Send verification")
        })
        
    }
    return (
        <div className="flex-1 text-center">
            <h3 className="text-3xl font-bold">FORGOT PASSWORD</h3>
            <div>
              <form onSubmit={handleForgotPassword} className="space-y-4 mt-6 w-full">
                <div className="px-4 py-2 rounded-md bg-gray-300 w-full my-2 border focus-within:border-accent">
                  <label htmlFor="" className="w-full flex items-center">
                    <input
                      onChange={handleForgotEmail}
                      type="email"
                      className=" text-black outline-none flex-1 bg-transparent w-full"
                      name="email"
                      id=""
                      placeholder="Enter email"
                    />
                    <MdEmail size={20} className="text-gray-600" />
                  </label>
                </div>
                {invalidForgotEmail && (
                  <p className="text-sm text-red-500 text-left">
                    Your Enter email is invalid!
                  </p>
                )}
                {/* Re password  */}
                <div className="w-full flex justify-between">
                    <button onClick={()=> navigate(-1)} className="px-6 py-2 bg-accent text-white rounded-md font-medium">Back</button>
                    <button className="px-6 py-2 border border-accent rounded-lg text-accent font-medium hover:bg-accent duration-300 hover:text-black focus:bg-accent focus:text-black">
                    Send Verification Email
                    </button>
                </div>
              </form>
            </div>
        </div>

    );
};

export default ForgotPassword;