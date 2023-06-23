import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
// import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to={"/"}
          className="flex - items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ahmad <span className="sm:block hidden">| JAvaScript MAstery</span>
          </p>
        </Link>
        <ul className="list-non hidden sm:flex flx-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white cursor-pointer`}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end ityem-center">
          <img src="" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;