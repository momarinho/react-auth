import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
