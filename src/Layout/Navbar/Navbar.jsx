import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import'./Navbar.css'

export default function Navbar() {
    const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${isShrunk ? "shrink" : ""}`} data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-2 text-primary" href="#">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto fs-5">
              <li className="nav-item">
                <NavLink className="nav-link isActive" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link " aria-current="page" to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
