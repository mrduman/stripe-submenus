import React, { useState } from "react";
import data from "./data";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isSidebarOpen, toggleIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, toggleSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    toggleIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    toggleIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = data.find((link) => link.page === text);
    setLocation(coordinates);
    toggleSubmenuOpen(true);
    setPage(page);
  };

  const closeSubmenu = () => {
    toggleSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
