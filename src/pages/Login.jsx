import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncloginuser } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = (userData) => {
    dispatch(asyncloginuser(userData));
    toast.success("Login successful!", {
      position: "top-right",
      autoClose: 1000,
    });
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl md:p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your account.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit(loginHandler)} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="block w-full rounded-lg border-gray-300 py-3 pl-10 pr-3 shadow-sm focus:border-gray-800 focus:ring-gray-800 transition-all"
                {...register("username", { required: "Username is required." })}
              />
            </div>
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">
                {errors.username.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="block w-full rounded-lg border-gray-300 py-3 pl-10 pr-10 shadow-sm focus:border-gray-800 focus:ring-gray-800 transition-all"
                {...register("password", {
                  required: "Password is required.",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: "Invalid password format.",
                  },
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-12 text-gray-500 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg border border-transparent bg-gray-900 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all duration-300"
            >
              Sign In
            </button>
          </motion.div>
        </form>

        <motion.p className="text-center text-sm text-gray-600" variants={itemVariants}>
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="font-medium text-gray-800 hover:text-gray-600"
          >
            Register
          </NavLink>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;