import styles from "./Navbar.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { IoLogInOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GiCook } from "react-icons/gi";
import { IoCreateOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  // Navigation toggle state
  const [toggleNavBar, setToggleNavBar] = useState(false);

  return (
    <div className={styles["container"]}>
      <nav className={styles["site-nav"]}>
        <Link to="/" className={styles["site-nav-title"]}>
          <span>Casserole</span>
          <GiKnifeFork />
        </Link>
        <div className={styles["search-container"]}>
          <input className={styles["site-nav-search"]} type="text"></input>
          <HiOutlineSearch className={styles["search-icon"]} />
        </div>
        <div className={styles["links-container"]}>
          <div
            className={
              toggleNavBar ? styles["hamburger-close"] : styles["hamburger"]
            }
            onClick={() => setToggleNavBar(!toggleNavBar)}
          >
            <span className={styles["top"]}></span>
            <span className={styles["middle"]}></span>
            <span className={styles["bot"]}></span>
          </div>
          <ul
            className={
              toggleNavBar ? styles["main-nav"] : styles["main-nav-closed"]
            }
          >
            <CustomLink to="/register">
              <IoCreateOutline className={styles["link-icon"]} /> Register
            </CustomLink>
            <CustomLink to="/login">
              <IoLogInOutline className={styles["link-icon"]} /> Login
            </CustomLink>
            <CustomLink to="/logut">
              <CiLogout className={styles["link-icon"]} /> Logout
            </CustomLink>
            <CustomLink to="/recepies">
              <GiCook className={styles["link-icon"]} /> Recepies
            </CustomLink>

            <CustomLink to="/about">
              <IoInformationCircleOutline className={styles["link-icon"]} />
              About
            </CustomLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

/**
 *
 * Custom Links for the navigation
 */

interface LinkProps {
  to: string;
  children: React.ReactNode;
}
const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? styles["active"] : "link"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
