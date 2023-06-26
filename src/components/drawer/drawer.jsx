import { Backdrop } from "@components/backdrop";
import { Contexts } from "@components/context";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { exact: true, path: "/", label: "Tobi" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
  { path: "/resume", label: "Resume" },
];

const Drawer = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);

  return (
    <>
      {drawerIsOpen && (
        <>
          {drawerIsOpen && (
            <Backdrop zIndex={30} onClick={() => setDrawerIsOpen(false)} />
          )}
          <aside className={drawerIsOpen ? "drawer" : "drawer closed"}>
            <nav className={"drawer-nav"}>
              {links.map(({ exact, path, label }) => (
                <NavLink
                  key={path}
                  exact={exact}
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "drawer-link active" : "drawer-link"
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Drawer;
