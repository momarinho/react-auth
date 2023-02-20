import React from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../hook/useForm';

const SignupForm = () => {
  const { inputs, handleChange, handleSubmit } = useForm(() =>
    console.log('Form submitted')
  );

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 ">
      <div className="max-w-md w-full mx-auto border p-4 md:p-10 border-gray-400 rounded-md bg-gray-100">
        <div className="text-center font-medium text-2xl mb-4">
          Create Account
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={inputs.name || ''}
              onChange={handleChange}
              required
            />
          </div>

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
              name="email"
              type="email"
              placeholder="Your email"
              value={inputs.email || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              value={inputs.password || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create account
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
