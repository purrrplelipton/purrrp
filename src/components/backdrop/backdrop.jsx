import React, { useEffect } from "react";
import "./backdrop.css";

const Backdrop = ({ zIndex, onClick }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) onClick();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClick]);

  return (
    <div
      id={"backdrop"}
      style={zIndex ? { zIndex } : null}
      onClick={onClick}
      role={"presentation"}
      tabIndex={-1}
      aria-label={"Backdrop"}
    />
  );
};

export default Backdrop;
