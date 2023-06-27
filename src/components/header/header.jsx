import { Contexts } from "@components/context";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { drawerIsOpen, setDrawerIsOpen } = useContext(Contexts);

  return (
    <header className={"header"}>
      <Link href={"/"} className={"header-link"}>
        Tobi
      </Link>
      <button
        type="button"
        onClick={() => setDrawerIsOpen(true)}
        className={"drawer-toggle"}
        title={"Drawer Toggle"}
        aria-label={drawerIsOpen ? "Close drawer" : "Open drawer"}
      >
        <MenuIcon color={"inherit"} />
      </button>
    </header>
  );
};

export default Header;
