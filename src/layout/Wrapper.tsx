import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


const Wrapper = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Wrapper