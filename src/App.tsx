import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import LoginError from "./Components/Login/LoginError";
import NavbarComp from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import RegisterError from "./Components/Register/RegisterError";
import TableCartContainer from "./Components/TableCarts/TableContainer";
import TableProductContainer from "./Components/TableProducts/TableContainer";
import AuthProvider from "./Context/AuthContext";



function App() {

  const [showNav, setShowNav] = useState<boolean>(true)

  return (
    <>
      <AuthProvider>
        {showNav && <NavbarComp />}
        <Routes>
          <Route path='/' element={<Login funcNav={setShowNav} />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/products' element={<TableProductContainer funcNav={setShowNav} />}></Route>
          <Route path='/carts' element={< TableCartContainer />}></Route>
          <Route path='/register-error' element={< RegisterError />}></Route>
          <Route path='/login-error' element={< LoginError />}></Route>

        </Routes>
      </AuthProvider>

    </>
  )

}

export default App;
