import { Outlet, NavLink } from "react-router-dom"
import { Header, TaraskinaLogo, NavList, HeaderLink } from "./Layout.styled"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <>
            <Header>
                <TaraskinaLogo to="/">TARASKINA</TaraskinaLogo>
                <nav>
                    <NavList>
                        <li><HeaderLink to="/">Домашня</HeaderLink></li>
                        <li><HeaderLink to="/galery">Галерея</HeaderLink></li>
                        <li><HeaderLink to="/about">Галерея</HeaderLink></li>
                    </NavList>
                </nav>
            </Header>    
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout