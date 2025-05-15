import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import LoggedInView from './components/LoggedInView';

export default function App() {
  const email = useSelector(state => state.loginForm.email);
  return email ? <LoggedInView /> : <LoginForm />;
}