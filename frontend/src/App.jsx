import Signup from "./Pages/signup";
import Login from "./Pages/login";
import Home from "./Pages/home";
import Front from './Pages/front'
import ProtectedRoute from "./Components/ProtectedRoute"

import React from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/home" element={<Home />} />
        <Route element= {<ProtectedRoute/>}>
          <Route path="/front" element={<Front/>} />
        </Route>

        {/*Default page*/}

        <Route path="/" element={<Navigate to="/home" replace/>} />

        {/* Unknown routes */}
        <Route path= "*" element={<Navigate to ="/home" replace />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;