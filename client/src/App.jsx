import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import  { AuthLayout, GuestLayout } from "./pages/Layout";
import Authpage from "./pages/Authpage";
import Homepage from "./pages/HomePage";
import BuilderPage from "./pages/BuilderPage";
import ReviewPage from "./pages/ReviewPage";



function App() {
  return(
    <Routes>
      {/* Login Routes */}
      <Route element={<GuestLayout/>} >
        <Route path='/login' element = {<Authpage mode="login"/>} />
        <Route path='/register' element = {<Authpage mode="register"/>} />

      </Route>

      {/* Protected Routes */}
      <Route element={<AuthLayout/>} >
      <Route path='/' element = {<Homepage/>} />
      <Route path='/builder/:id' element = {<BuilderPage/>} />
      <Route path='/review/:id' element = {<ReviewPage/>} />
        
      </Route>

      {/* catch all , unregistered web pages or web router */}
      <Route path='*' element = {<Navigate to="/" replace />} />

  </Routes>
  )
   
}

export default App;
