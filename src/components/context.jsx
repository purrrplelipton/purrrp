import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Contexts = createContext(null);

export const Provider = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  useEffect(() => {
    if (drawerIsOpen) {
      document.body.setAttribute("style", "overflow: hidden;");
      // document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
      // document.body.style.overflow = "initial";
    }

    return () => null;
  }, [drawerIsOpen]);

  return (
    <Contexts.Provider value={{ drawerIsOpen, setDrawerIsOpen }}>
      {children}
    </Contexts.Provider>
  );
};

Provider.propTypes = { children: PropTypes.node.isRequired };
