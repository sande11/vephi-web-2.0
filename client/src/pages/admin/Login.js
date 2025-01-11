import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link
            to="/admin/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
