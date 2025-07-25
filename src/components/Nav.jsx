import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser } from "../store/actions/UserActions";
import { toast } from "react-toastify";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  };
  return (
    <nav className="nav absolute top-0 w-screen px-2 py-[1.25em] flex items-center justify-between -translate-y-[120%] lg:px-4">
      <div className="logo">
        <a href="#" className="text-white text-xl font-medium capitalize">
          Komal Pandey
        </a>
      </div>
      <div className="nav-link hidden lg:flex justify-center items-center gap-10 cursor-pointer absolute left-[50%] -translate-x-[48%]">
        <NavLink to="/" className="text-white text-[0.95rem] font-medium uppercase" >
          Home
        </NavLink>
        <NavLink to="/products" className="text-white text-[0.95rem] font-medium uppercase">
          Products
        </NavLink>
        <NavLink to="/inspiration" className="text-white text-[0.95rem] font-medium uppercase">
          inspiration
        </NavLink>
        <NavLink to="/about" className="text-white text-[0.95rem] font-medium uppercase">
          about
        </NavLink>
        
      </div>
      <div className="flex gap-5">
        {user ? (
          <div className="flex gap-5 items-center text-white">
            <NavLink to="/">{user.username}</NavLink>
            <button
              className="bg-white text-black px-5 py-2 rounded-xl cursor-pointer"
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
    </nav>
  );
};

export default Nav;
