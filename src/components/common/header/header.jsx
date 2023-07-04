import { Bars } from "@assets/vectors";
import { Contexts } from "@components/context";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../drawer/drawer";
import "./header.css";

const Header = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);

  return (
    <header className={"header"}>
      <Link to={"/"} className={"header-link"}>
        Oluwatobiloba
      </Link>
      <nav className="larger-screens-nav">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {label}
          </NavLink>
        ))}
        <a
          href="https://profile.indeed.com/p/immanuelt-dq6697p"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link resume"
        >
          My Resume
        </a>
      </nav>
      <button
        type="button"
        onClick={() => setDrawerIsOpen(true)}
        className={"drawer-toggle"}
        title={"Drawer Toggle"}
        aria-label={drawerIsOpen ? "Close drawer" : "Open drawer"}
      >
        <Bars fill="var(--clr-4)" />
      </button>
    </header>
  );
};

export default Header;
