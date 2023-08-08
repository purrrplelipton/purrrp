import { TablerMenu } from '@assets/vectors';
import { links } from '@components/common/drawer';
import { Contexts } from '@components/context';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);

  return (
    <header className="header">
      <Link to="/" className="header-link">
        Oluwatobiloba
      </Link>
      <nav className="larger-screens-nav">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
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
        className="drawer-toggle"
        title="Drawer Toggle"
        aria-label={drawerIsOpen ? 'Close drawer' : 'Open drawer'}
      >
        <TablerMenu />
      </button>
    </header>
  );
}

export default Header;
