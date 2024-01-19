import React, { createContext, useContext, ReactNode } from "react";

interface PageContextProps {
  page: object | null;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode; page: object | null }> = ({ children, page }) => (
  <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("Should use in proper scope");
  }
  return context;
};
