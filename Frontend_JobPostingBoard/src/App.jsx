import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUpForm from './Pages/SignUpForm'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
import OtpVerificationForm from './Pages/OtpVerificationForm'
import { DashBoard } from './Pages/DashBoard'
import JobPosting from './Pages/JobPosting'
function App() {

  const c = localStorage.getItem('token');
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={c ? <DashBoard /> : <SignUpForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/otpauth" element={<OtpVerificationForm />} />
          <Route path="/posting" element={<JobPosting />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
