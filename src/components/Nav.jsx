import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react"; 

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = () => {
    dispatch(asynclogoutuser());

    toast.success("Logout successful!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/");
    setIsMenuOpen(false); 
  };


  const MobileNavLink = ({ to, className, children }) => (
    <NavLink to={to} className={className} onClick={() => setIsMenuOpen(false)}>
        {children}
    </NavLink>
  )



  return (
    <>
      <nav className="nav bg-[#f3f4f6e1] absolute top-0 w-full px-4 py-5 flex items-center justify-between
      border-b lg:px-6">
        <div className="logo">
          <NavLink to="/" className="text-black text-xl font-medium capitalize">
            Komal Pandey
          </NavLink>
        </div>
        <div className="nav-link hidden lg:flex justify-center items-center gap-10 cursor-pointer absolute left-[50%] -translate-x-[50%]">
          <NavLink to="/" className="text-black text-[0.95rem] font-medium uppercase">
            Home
          </NavLink>
          <NavLink to="/products" className="text-black text-[0.95rem] font-medium uppercase">
            Products
          </NavLink>
          <NavLink to="/inspiration" className="text-black text-[0.95rem] font-medium uppercase">
            inspiration
          </NavLink>
          <NavLink to="/about" className="text-black text-[0.95rem] font-medium uppercase">
            about
          </NavLink>
        </div>

        {/* Desktop Auth Buttons (now hidden on small screens) */}
        <div className="hidden lg:flex gap-5">
          {user ? (
            <div className="flex gap-5 items-center text-black">
              <NavLink to="/">{user.username}</NavLink>
              <button
                className="bg-neutral-700 text-white px-5 py-2 rounded-xl cursor-pointer"
                onClick={logoutHandler}
              >
                logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="bg-white py-2 px-5 rounded-lg">
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-black">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black text-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center justify-center h-full -mt-20 gap-8">
          {/* Using the exact same classes to preserve font size and weight */}
          <MobileNavLink to="/" className="text-white text-[0.95rem] font-medium uppercase">
            Home
          </MobileNavLink>
          <MobileNavLink to="/products" className="text-white text-[0.95rem] font-medium uppercase">
            Products
          </MobileNavLink>
          <MobileNavLink to="/inspiration" className="text-white text-[0.95rem] font-medium uppercase">
            inspiration
          </MobileNavLink>
          <MobileNavLink to="/about" className="text-white text-[0.95rem] font-medium uppercase">
            about
          </MobileNavLink>

          {/* Mobile Auth Buttons */}
          <div className="mt-8 flex flex-col items-center gap-6">
            {user ? (
              <div className="flex flex-col items-center gap-6 text-white">
                <MobileNavLink to="/profile">{user.username}</MobileNavLink>
                <button
                  className="bg-white text-black px-5 py-2 rounded-xl cursor-pointer"
                  onClick={logoutHandler}
                >
                  logout
                </button>
              </div>
            ) : (
              <MobileNavLink to="/login" className="bg-white text-black py-2 px-5 rounded-lg">
                Login
              </MobileNavLink>
            )}
          </div>
        </nav>
      </div>
      
    </>
  );
};

export default Nav;