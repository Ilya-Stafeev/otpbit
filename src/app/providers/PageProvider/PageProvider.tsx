import React, { createContext, useContext, useState, useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';

interface PageContextProps {
    currentPath: string;
    currentPageTitle: string;
    currentLinkTitle: string;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const [currentPageTitle, setCurrentPageTitle] = useState('');
    const [currentLinkTitle, setCurrentLinkTitle] = useState('');

  useEffect(() => {
    const pageTitles: { [key: string]: { pageTitle: string, linkTitle: string } } = {
        '/': { pageTitle: 'Home', linkTitle: 'Home' },
        '/about': { pageTitle: 'About Us', linkTitle: 'About Us' },
        '/terms': { pageTitle: 'Terms', linkTitle: 'Terms Otpbit' },
    };

    setCurrentPath(location.pathname);
    const titles = pageTitles[location.pathname] || { pageTitle: 'Page', linkTitle: 'Page' };
    setCurrentPageTitle(titles.pageTitle);
    setCurrentLinkTitle(titles.linkTitle);

  }, [location.pathname]);

  return (
    <PageContext.Provider value={{ currentPath, currentPageTitle, currentLinkTitle }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};
