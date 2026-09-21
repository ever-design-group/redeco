import React, { useEffect, useState } from "react";
import { Link } from '@reach/router';


const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: [props.className, isCurrent ? 'active' : 'non-active'].filter(Boolean).join(' '),
      };
    }}
  />
);


export default function() {

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky + 300) {
          header.classList.add("sticky");
          totop.classList.add("show");

        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar'>
     <div className='container-fluid'>
       <div className='row m-2-hor w-100-nav'>
          <div className='logo'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                <img
                    src="./img/logo.png"
                    className="img-fluid"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>

          {showmenu &&
          <div className='menu d-xl-none'>
            <div className='navbar-item'>
              <NavLink to="/" onClick={() => btn_icon(!showmenu)}>
                Home
              </NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/about" onClick={() => btn_icon(!showmenu)}>
                About Us
              </NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/service" onClick={() => btn_icon(!showmenu)}>
                Services
              </NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>
                Projects
              </NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/faq" onClick={() => btn_icon(!showmenu)}>
                FAQ
              </NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink className='btn-contact' to="/contact" onClick={() => btn_icon(!showmenu)}>
                Contact Us
              </NavLink>
            </div>
          </div>
          }

          <div className='menu d-none d-xl-flex'>
            <div className='navbar-item'>
              <NavLink to="/">Home</NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/about">About Us</NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/service">Services</NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/works">Projects</NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink to="/faq">FAQ</NavLink>
            </div>
            <div className='navbar-item'>
              <NavLink className='btn-contact' to="/contact">Contact Us</NavLink>
            </div>
          </div>

      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>
    </header>
    );
}
