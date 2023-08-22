import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full p-4 bg-white shadow-xl z-50">
      <div className="container mx-auto flex sm:justify-between items-center">
        <div className="flex items-center">
          
          <NavLink to={"/"} className="mr-80 ">
            Levi Gonzalez
          </NavLink>

          {/* Menú de navegación para pantallas grandes */}
          <div className="hidden lg:flex items-center">
            <NavLink
              to={"/technical-certificates"}
              className="hover:text-indigo-400 active:underline p-1 mx-4"
            >
              Certificados técnicos
            </NavLink>

            <NavLink
              to={"/personal-certificates"}
              className="hover:text-indigo-400 active:underline p-1 mx-4"
            >
              Certificados desarrollo personal
            </NavLink>
          </div>
        </div>

        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menú de navegación móvil */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } xl:hidden text-center mt-2`}
      >
        <NavLink
          to={"/technical-certificates"}
          className="hover:text-indigo-400 active:underline p-1 block"
          onClick={toggleMobileMenu}
        >
          Certificados técnicos
        </NavLink>

        <NavLink
          to={"/personal-certificates"}
          className="hover:text-indigo-400 active:underline p-1 block"
          onClick={toggleMobileMenu}
        >
          Certificados desarrollo personal
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
