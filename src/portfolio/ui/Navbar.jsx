import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center border-b shadow-xl">
        <NavLink to={"/"}>Levi Gonzalez</NavLink>

        <div className="space-x-10 font-light text-black capitalize mb-4">
          <NavLink to={"/"} className={"justify-center items-center text-center mr-36"}>Levi Gonzalez</NavLink>
          <NavLink
            to={"/technical-certificates"}
            className="hover:text-indigo-400 active:underline p-1 rounded-m"
          >
            certificados técnicos
          </NavLink>

          <NavLink
            to={"/personal-certificates"}
            className="hover:text-indigo-400 active:underline p-1 rounded-m"
          >
            Certificados desarrollo personal
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
