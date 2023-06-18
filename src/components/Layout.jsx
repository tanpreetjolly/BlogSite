
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"
import {Outlet} from "react-router-dom"

const Layout = ({search, setSearch}) => {
  return (
    <div>
      <Header title={"Blog Fair"}/>
      <Nav search={search} setSearch={setSearch}/>
      <Outlet/>
      <Footer/>
    </div>
    
  )
}

export default Layout