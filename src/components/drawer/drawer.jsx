import { Backdrop } from "@components/backdrop";
import { Contexts } from "@components/context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { exact: true, path: "/", label: "Oluwatobiloba" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/works", label: "Works" },
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
          <aside className={`drawer${drawerIsOpen ? "" : " closed"}`}>
            <nav className={"drawer-nav"}>
              {links.map((link, index) => (
                <NavLink
                  key={link.path}
                  {...(link.exact && link.exact)}
                  to={link.path}
                  className={({ isActive }) =>
                    `drawer-link${isActive ? " active" : ""}${
                      !index ? " header-link" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <button
              type={"button"}
              aria-label={"Close drawer"}
              onClick={() => setDrawerIsOpen(false)}
              className={"hidden-close-drawer-btn"}
            >
              {/* <i data-feather={"x"} /> */}
            </button>
          </aside>
        </>
      )}
    </>
  );
};

export default Drawer;
