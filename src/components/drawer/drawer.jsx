import { Backdrop } from "@components/backdrop";
import { Contexts } from "@components/context";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { exact: true, path: "/", label: "Tobi" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/works", label: "Works" },
  { path: "/contact", label: "Contact" },
  { path: "/resume", label: "Resume" },
];

const Drawer = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!drawerIsOpen) {
      setIsClosing(true);
      const timeout = setTimeout(() => setIsClosing(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [drawerIsOpen]);

  return (
    <>
      {drawerIsOpen && (
        <>
          {drawerIsOpen && (
            <Backdrop
              zIndex={30}
              onClick={() => setDrawerIsOpen(false)}
              className={isClosing ? "fade" : ""}
            />
          )}
          <aside className={`drawer${isClosing ? " closed" : ""}`}>
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
              <CloseIcon color={"inherit"} />
            </button>
          </aside>
        </>
      )}
    </>
  );
};

export default Drawer;
