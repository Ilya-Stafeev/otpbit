import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type PageTransitionContextType = {
  isVisible: boolean;
  startTransition: () => void;
};

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const startTransition = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  useEffect(() => {
    startTransition();
  }, [location]);

  return (
    <PageTransitionContext.Provider value={{ isVisible, startTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
