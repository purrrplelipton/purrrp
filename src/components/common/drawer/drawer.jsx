import { Backdrop } from "@components/common";
import { Contexts } from "@components/context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { path: "/about-me", label: "About Me" },
  { path: "/experiences", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/react-out", label: "Reach Out" },
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
            <div>
              <button
                type={"button"}
                aria-label={"Close drawer"}
                onClick={() => setDrawerIsOpen(false)}
                className={"close-drawer-btn"}
              >
                <XMarkIcon
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    color: "var(--clr-1)",
                  }}
                />
              </button>
            </div>
            <nav className={"drawer-nav"}>
              {links.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `drawer-link${isActive ? " active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <a
              href="https://docs.google.com/document/d/1sveStIKJSgAD_EJeVN73b5VNFIghZPtxoPzux7osuZs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-link resume"
            >
              My Resume
            </a>
          </aside>
        </>
      )}
    </>
  );
};

export default Drawer;
