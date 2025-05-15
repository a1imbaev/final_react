import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/loginFormSlice';

const LoggedInView = () => {
  const email = useSelector(state => state.loginForm.email);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Tailwind работает!</h1>
        <p className="text-lg font-medium text-gray-700 mb-6">
          Добро пожаловать, <span className="text-blue-600 font-semibold">{email}</span>!
        </p>
        <button
          className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => dispatch(logout())}
        >
          Выйти
        </button>
      </div>
    </div>
  );
};

export default LoggedInView;