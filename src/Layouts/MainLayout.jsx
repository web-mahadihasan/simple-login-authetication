import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../App.css'
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Toaster/>
            <Navbar/>
            <div className="min-h-[calc(100vh-292px)] container mx-auto px-4">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;