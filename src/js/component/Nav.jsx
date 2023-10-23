import React from "react";

const Nav = () => {
    return (
        <div className="container-nav">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <i className="icon-minus fa-solid fa-minus nav-link"></i>
                </li>
                <li className="nav-item">
                    <i className="icon-restore fa-regular fa-window-restore nav-link"></i>
                </li>
                <li className="nav-item">
                    <i className="icon-x fa-solid fa-x nav-link"></i>
                </li>
            </ul>
        </div>
    );
}

export default Nav;