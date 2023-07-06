import { TablerX } from "@assets/vectors";
import { Backdrop } from "@components/common";
import { Contexts } from "@components/context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { path: "/about-me", label: "About Me" },
  { path: "/experience", label: "Experience" },
  { path: "/works", label: "Works" },
  { path: "/reach-out", label: "Reach Out" },
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
            <header>
              <button
                type={"button"}
                aria-label={"Close drawer"}
                onClick={() => setDrawerIsOpen(false)}
                className={"close-drawer-btn"}
                autoFocus
              >
                <TablerX />
              </button>
            </header>
            <nav className={"drawer-nav"}>
              <div>
                {links.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `drawer-link${isActive ? " active" : ""}`
                    }
                    onClick={() => setDrawerIsOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
              <a
                href="https://profile.indeed.com/p/immanuelt-dq6697p"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-link resume"
              >
                My Resume
              </a>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export { links, Drawer };
