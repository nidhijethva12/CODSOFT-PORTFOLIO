import React from 'react';
import img1 from '../icons/portfolio_icon.png';
import '../App.css'
const Navbar = () => {
    const handleNavItemClick = () => {
        const navbar = document.getElementById('navbarNav');
        const bsCollapse = new window.bootstrap.Collapse(navbar, {
            toggle: false
        });
        bsCollapse.hide();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src={img1} alt="..." width={50} height={50} /> Nidhi Jethva
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center me-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" onClick={handleNavItemClick}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={handleNavItemClick}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={handleNavItemClick}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleNavItemClick}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
