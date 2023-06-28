import { Contexts } from "@components/context";
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
        {/* <i data-feather={"menu"} /> */}
      </button>
    </header>
  );
};

export default Header;
