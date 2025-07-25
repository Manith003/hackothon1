import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const { users: user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    toast.success("Logout successful!", {
      position: "top-right",
      autoClose: 1500,
    });
    navigate("/");
    setIsMenuOpen(false);
  };


  const MobileNavLink = ({ to, children }) => (
    <NavLink to={to} onClick={() => setIsMenuOpen(false)}>
      {children}
    </NavLink>
  );

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Products", to: "/products" },
    { title: "Inspiration", to: "/inspiration" },
    { title: "About", to: "/about" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="w-7xl mx-auto py-3 sm:px-5 lg:px-8">
          <div className="flex items-center justify-between px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-2xl font-bold text-gray-900">
                Komal Pandey
              </NavLink>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {user ? (
                navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.to}
                    className="relative text-gray-700 hover:text-black transition-colors duration-300 group"
                  >
                    {link.title}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                ))
              ) : (
                <NavLink
                  to="/"
                  className="relative text-gray-700 hover:text-black transition-colors duration-300 group"
                >
                  Home
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              )}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-5">
              {user ? (
                <>
                  <span className="font-medium text-gray-800">
                    {user.username}
                  </span>
                  <button
                    onClick={logoutHandler}
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-transform hover:scale-105"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-transform hover:scale-105"
                >
                  Login
                </NavLink>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-900"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-gray-900 text-white flex flex-col items-center justify-center lg:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-7 right-6 text-white"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.nav
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-col items-center gap-8 text-center"
            >
              {user ? (
                navLinks.map((link) => (
                  <motion.div key={link.title} variants={linkVariants}>
                    <MobileNavLink to={link.to}>
                      <span className="text-3xl font-medium">{link.title}</span>
                    </MobileNavLink>
                  </motion.div>
                ))
              ) : (
                <motion.div variants={linkVariants}>
                  <MobileNavLink to="/">
                    <span className="text-3xl font-medium">Home</span>
                  </MobileNavLink>
                </motion.div>
              )}

              {/* Mobile Auth Buttons */}
              <div className="mt-10 flex flex-col items-center gap-6">
                {user ? (
                  <>
                    <motion.div variants={linkVariants}>
                      <span className="text-xl font-medium">
                        {user.username}
                      </span>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                      <button
                        onClick={logoutHandler}
                        className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold"
                      >
                        Logout
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <motion.div variants={linkVariants}>
                    <MobileNavLink to="/login">
                      <span className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold">
                        Login
                      </span>
                    </MobileNavLink>
                  </motion.div>
                )}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
