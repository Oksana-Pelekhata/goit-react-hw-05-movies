import {Header, StyledNavLink, Nav } from './Layout.styled'
import { Outlet } from "react-router-dom"


 const Layout = () => {
    return (
        <Header>
            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/movies" >Movies</StyledNavLink>
            </Nav>
            <Outlet />
        </Header>
    )
}

export default Layout