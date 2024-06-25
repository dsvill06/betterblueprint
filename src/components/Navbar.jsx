import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu } from "../assets";
import { styles } from "../styles";
import { IoMdMenu } from "react-icons/io";

const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "aboutUs",
    title: "About Us",
  },

  {
    id: "clients",
    title: "Our Clients",
  },
  {
    id: "talent",
    title: "Our Talent",
  },
  {
    id: "contactUs",
    title: "Contact Us",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex items-center max-w-7xl  gap-x-2">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8 mt-2">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[14px] font-medium font-sans 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={nav.id === "services" ? `/#${nav.id}` : `/${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-full h-[150vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex justify-end">
                {/* <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                /> */}
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end  -ml-[35px]"
              >
                {navLinks.map((nav, index) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } text-[56px] font-bold font-sans
                      uppercase tracking-[1px] cursor-pointer p-5`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a
                      href={
                        nav.id === "services" ? `/#${nav.id}` : `/${nav.id}`
                      }
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
