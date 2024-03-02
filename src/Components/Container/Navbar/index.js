import React from "react";
import logo from "../../../Assets/logo.png"
import { NavbarWrapper } from "./style";
const Navbar = () => {
    return(
        <React.Fragment>
            <NavbarWrapper>
            <nav className="navbar navbar-expand-md navbar-dark stick-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="ảnh nỗi"/>
                    </a>
                    <buttun className="navbar-toggler" type="button" data-bs-toggler="collapse" data-bs-target="#navbarResponsive">
                        <span className="navbar-toggler-icon" />
                    </buttun>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUNT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TALKS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">RESUME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PAGES</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </NavbarWrapper>
        </React.Fragment>
    )
}
export default Navbar;