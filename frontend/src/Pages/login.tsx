import type { FormEvent } from 'react';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );
      console.log(response.data);
      if(response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.user.name);
        navigate('/front')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-2xl border border-slate-800">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Login to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} 
        className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-slate-400">
          New User?{" "}
          <Link to="/signup"
            className="font-medium text-blue-500 transition hover:text-blue-400"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;