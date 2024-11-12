import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        <Link to={"/"} className="px-4 py-2 border rounded-md ml-2">Home</Link>,
        <Link to={"/about"} className="px-4 py-2 border rounded-md ml-2">About</Link>,
        <Link to={"/blogs"} className="px-4 py-2 border rounded-md ml-2">Blogs</Link>,
        <Link to={"/contact-us"} className="px-4 py-2 border rounded-md ml-2">Contact us</Link>
    ]
  return (
    <div className="bg-base-100 border-b shadow-sm">
      <div className="container mx-auto px-4 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {
                navLinks.map((link, idx) => <li key={idx}>{link}</li>)
              }
            </ul>
          </div>
          <div className="text-3xl font-bold text-accent">LogIN-Form</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navLinks.map((link, idx) => <li key={idx}>{link}</li>)
            }
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="px-6 py-2 border rounded-md">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
