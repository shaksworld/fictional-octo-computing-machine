import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import User from "../../page/User";
import Withdraw from "../../page/Deposit";
import Deposit from "../../page/Withdraw";

function Index() {
  return (
        <Routes>
            <Route path="/" element={<User />} ></Route>
            <Route path="/deposit" element={<Deposit />} ></Route>
            <Route path="/withdraw" element={<Withdraw />} ></Route>
        </Routes>
  )
}



export default Index