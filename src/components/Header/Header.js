import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className={"navbar-brand"}>Budget Laptop</NavLink>
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/reviews">Reviews</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/dashboard">DeshBoard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/blogs">Blogs</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;