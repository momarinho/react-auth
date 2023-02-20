import React from 'react';
import { Link } from 'react-router-dom';

function LoginScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="max-w-md w-full mx-auto border p-4 md:p-10 border-gray-400 rounded-md bg-gray-100">
        <div className="text-center font-medium text-2xl mb-4">Login</div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="text-blue-500 font-medium hover:text-blue-800"
            >
              Create new account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;
