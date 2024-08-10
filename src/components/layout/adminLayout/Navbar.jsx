import React, { useEffect, useState } from "react";
import {FaBox, FaHome, FaListAlt} from 'react-icons/fa'
import { fetchMenus } from '../../../api/api.js';

const iconMapping = {
    dashboard: <FaHome />,
    order: <FaBox />,
    wishlist: <FaListAlt />
};

const Navbar = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const getMenus = async () => {
            const menusData = await fetchMenus();
            setMenus(menusData);
        };

        getMenus();
    }, []);

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    {menus.map(menu => (
                        <li className="nav-item" key={menu.id}>
                            <a className="nav-link" aria-current="page" href={menu.url}>
                            {iconMapping[menu.icon]} &nbsp;
                                {menu.name}
                            </a>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;