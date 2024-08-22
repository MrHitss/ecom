import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { faker } from '@faker-js/faker';

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const imageUrl = faker.image.url();
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        console.log(pathname);
    })

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
    
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li class="nav-item"><Link to="/"  className={`nav-link px-2 ${pathname === "/" ? "active" : ""}`}>Home</Link></li>
                        <li><Link to="/products" className={`nav-link px-2 ${pathname === "/products" ? "active" : ""}`} >Products</Link></li>
                    </ul>

                    <div className="text-end">
                        {user ? (
                            <Dropdown>
                                Hello, {user.username} &nbsp;

                                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                <img src={imageUrl} alt="Random" style={{ width: '30px', height: '30px', borderRadius: '100%' }} /> &nbsp;
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
