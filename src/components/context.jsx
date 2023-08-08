import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const Contexts = createContext(null);

export function Provider({ children }) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <Contexts.Provider value={{ drawerIsOpen, setDrawerIsOpen }}>
      {children}
    </Contexts.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };
