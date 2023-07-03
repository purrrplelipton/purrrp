import { Contexts } from "@components/context";
import { Bars3Icon } from "@heroicons/react/24/outline";
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
          href="https://docs.google.com/document/d/1sveStIKJSgAD_EJeVN73b5VNFIghZPtxoPzux7osuZs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
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
        <Bars3Icon
          style={{ height: "1.2em", width: "1.2em", color: "var(--clr-4)" }}
        />
      </button>
    </header>
  );
};

export default Header;
