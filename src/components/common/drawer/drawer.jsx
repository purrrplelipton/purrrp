import { Backdrop } from "@components/common";
import { Contexts } from "@components/context";
import {
  HomeIcon as HomeIconOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconFilled } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./drawer.css";

const links = [
  { path: "/about-me", label: "About Me" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/reach-out", label: "Reach Out" },
];

const Drawer = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);
  const [homeisActive, setHomeisActive] = useState(false);

  const heroIconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    color: "var(--clr-1)",
  };

  return (
    <>
      {drawerIsOpen && (
        <>
          {drawerIsOpen && (
            <Backdrop zIndex={30} onClick={() => setDrawerIsOpen(false)} />
          )}
          <aside className={`drawer${drawerIsOpen ? "" : " closed"}`}>
            <div>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setHomeisActive(true)}
              >
                {homeisActive ? (
                  <HomeIconFilled style={heroIconStyle} />
                ) : (
                  <HomeIconOutline style={heroIconStyle} />
                )}
              </NavLink>
              <button
                type={"button"}
                aria-label={"Close drawer"}
                onClick={() => setDrawerIsOpen(false)}
                className={"close-drawer-btn"}
                autoFocus
              >
                <XMarkIcon style={heroIconStyle} />
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
