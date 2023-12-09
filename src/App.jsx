import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './components/Pages/HomePage/HomePage'
import Domains from './components/Pages/Domain/Domain'
import Contact from './components/Pages/Contact/Contact'
import LogIn from "./components/Pages/LogIn/LogIn"
import CustomerLogin from "./components/Pages/LogIn/CustomerLog/CustomerLog"
import ResellerLogin from "./components/Pages/LogIn/resellerLog/ResellerLog"
import SignUp from './components/Pages/SignUp/SignUp'
import CustomerSignup from './components/Pages/SignUp/CustomerSign/CustomerSignup'
import ResellerSignup from './components/Pages/SignUp/resellerSign/ResellerSignup'
import Error from './components/Pages/Error/Error'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path={"/domains"} element={<Domains />}></Route>
          {/* <Route path={"/hosting"} element={<Hosting />}></Route>
          <Route path={"/servers"} element={<Cloud />}></Route>
          <Route path={"/cloud"} element={<Servers />}></Route>
          <Route path={"/website"} element={<Website />}></Route>
          <Route path={"/apps"} element={<Apps />}></Route>
          <Route path={"/email"} element={<Email />}></Route>
          <Route path={"/security"} element={<Security />}></Route>
          <Route path={"/comboOffer"} element={<ComboOffer />}></Route>
          <Route path={"/becomeAReseller"} element={<BecomeReseller />}></Route> */}
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/login"} element={<LogIn />}></Route>
          <Route path={"/login/customer_login"} element={<CustomerLogin />}></Route>
          <Route path={"/login/reseller_login"} element={<ResellerLogin />}></Route>
          {/* <Route path={"/login/forget-password"} element={<ForgetPass />}></Route> */}
          <Route path={"/signup"} element={<SignUp />}></Route>
          <Route path={"/signup/customer_signup"} element={<CustomerSignup />}></Route>
          <Route path={"/signup/reseller_signup"} element={<ResellerSignup />}></Route>
          <Route path={"*"} element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
