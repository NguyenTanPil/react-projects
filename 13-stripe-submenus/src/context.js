import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  // functions
  const openSidebar = () => {
    setIsShowSidebar(true);
  };
  const closeSidebar = () => {
    setIsShowSidebar(false);
  };

  const openSubMenu = (text, { center, bottom }) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation({ center, bottom });
    setIsShowSubMenu(true);
  };
  const closeSubMenu = () => {
    setIsShowSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isShowSidebar,
        isShowSubMenu,
        openSubMenu,
        closeSubMenu,
        openSidebar,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
