import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";
import sublinks from "./data";

function Sidebar() {
  const data = useContext(AppContext);
  const { closeSidebar, isSidebarOpen } = data;

  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className="sidebar-links'">
          {sublinks.map((item, index) => {
            const { page, links } = item;

            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <a href={url} key={index}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
