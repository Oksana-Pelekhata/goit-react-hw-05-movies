import { Outlet } from "react-router-dom"
import { Suspense } from 'react';

import {Header, StyledNavLink, Nav } from './Layout.styled'


 const Layout = () => {
    return (
        <Header>
            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/movies" >Movies</StyledNavLink>
            </Nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
             </Suspense>
            
        </Header>
    )
}

export default Layout