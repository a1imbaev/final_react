import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/loginFormSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const isValidEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = e => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Введите корректный email');
      return;
    }
    setError('');
    dispatch(login(email));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Вход</h2>
        <input
          type="email"
          placeholder="Введите email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={!isValidEmail(email)}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;