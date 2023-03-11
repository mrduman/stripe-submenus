import React, { useContext } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

function Navbar() {
  const data = useContext(AppContext);
  const { openSidebar, openSubmenu } = data;

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onMouseOver={displaySubmenu}
              style={{ background: "black" }}
            >
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
