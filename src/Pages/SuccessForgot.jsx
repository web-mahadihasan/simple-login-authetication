import { useNavigate } from "react-router-dom";


const SuccessForgot = () => {
    const navigate = useNavigate()
    return (
        <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold px-4 text-accent">Password rest email was sent your email please check in inbox</h3>
            <button onClick={()=>navigate("/login")} className="px-6 py-2 border border-accent rounded-md text-accent my-6 hover:bg-accent duration-300 hover:text-white font-medium">Go to Login</button>
        </div>

    );
};

export default SuccessForgot;