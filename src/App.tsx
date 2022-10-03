import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComp from "./Components/Navbar/Navbar";
import TableCartContainer from "./Components/TableCarts/TableContainer";
import TableProductContainer from "./Components/TableProducts/TableContainer";


function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<TableProductContainer />}></Route>
        <Route path='/carts' element={< TableCartContainer />}></Route>
      </Routes>



    </>
  )

}

export default App;
