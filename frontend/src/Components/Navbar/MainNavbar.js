import React from "react";

import classes from './MainNavbar.module.css'
import { NavLink } from "react-router-dom/";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { tokenAction } from "../../Store/TokenContext";
const MainNavbar = (props) => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const email = useSelector(state => state.auth.email)

    const logOutHandler = ( )=>{
     dispatch(tokenAction.logOutHandler())
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className={classes.navbar}>
            <Container>
                <Navbar.Brand as={NavLink} to="/" className={classes.navBrand}>
                    MailBox
                </Navbar.Brand>
                <Navbar.Brand as={NavLink} to="/" className={classes.navBrand}>
                    {email}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/* <NavLink exact to="/"  className={classes.navLink}>
                            Home
                        </NavLink> */}
                       {isLoggedIn && <NavLink to="/" className={classes.navLink} onClick={logOutHandler} >
                            LogOut
                        </NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar