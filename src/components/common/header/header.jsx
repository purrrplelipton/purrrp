import { Contexts } from "@components/context";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);

  return (
    <header className={"header"}>
      <Link href={"/"} className={"header-link"}>
        Oluwatobiloba
      </Link>
      <button
        type="button"
        onClick={() => setDrawerIsOpen(true)}
        className={"drawer-toggle"}
        title={"Drawer Toggle"}
        aria-label={drawerIsOpen ? "Close drawer" : "Open drawer"}
      >
        <Bars3Icon
          style={{ height: "1.5rem", width: "1.5rem", color: "var(--clr-4)" }}
        />
      </button>
    </header>
  );
};

export default Header;
