import { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncregisteruser } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.08,
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

const Register = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const RegisterHandler = (userData) => {
    userData.id = nanoid();
    userData.isAdmin = true;
    dispatch(asyncregisteruser(userData));
    reset();
    toast.success("Registration successful!", {
      position: "top-right",
      autoClose: 3000,
    });
    navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-2xl md:p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Start your journey with us today.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit(RegisterHandler)} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="username" className="sr-only">Username</label>
            <div className="relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-12 pr-3 shadow-sm transition-colors duration-300 focus:border-gray-900 focus:ring-0"
                {...register("username", { required: "Username is required." })}
              />
            </div>
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-12 pr-3 shadow-sm transition-colors duration-300 focus:border-gray-900 focus:ring-0"
                {...register("email", { required: "A valid email is required." })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="block w-full rounded-lg border-gray-200 bg-gray-50 py-3 pl-12 pr-12 shadow-sm transition-colors duration-300 focus:border-gray-900 focus:ring-0"
                {...register("password", {
                  required: "Password is required.",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: "Password must include letter, number, & special character.",
                  },
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-12 text-gray-400 hover:text-gray-900 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg border border-transparent bg-gray-900 py-3 px-4 text-sm font-medium tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
            >
              CREATE ACCOUNT
            </button>
          </motion.div>
        </form>

        <motion.p className="text-center text-sm text-gray-500" variants={itemVariants}>
          Already have an account?{" "}
          <NavLink to="/login" className="font-medium text-gray-800 hover:text-gray-500 transition-colors">
            Sign In
          </NavLink>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;