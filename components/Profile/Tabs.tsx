/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

import {
  Children,
  createContext, isValidElement, useContext, useState, cloneElement
} from 'react';
import { SelectWrapper } from '@/styles/profile.styles';
import type { ReactNode, ReactElement } from 'react';

interface ContextProps {
  activeTab: number,
  setActiveTab: (_index: number) => void
}

const TabsContext = createContext<ContextProps | undefined>(undefined);
const useTabContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      'Error message'
    );
  }
  return context;
};
export const Tabs = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabList = ({ children }: { children: ReactNode }) => {
  const { setActiveTab } = useTabContext();
  const mappedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, {
        onClick: () => setActiveTab(index)
      });
    }
    return null;
  });

  return (
    <SelectWrapper>
      {mappedChildren}
    </SelectWrapper>
  );
};

export const TabPanels = ({ children }: { children: ReactNode }) => {
  const { activeTab } = useTabContext();
  const tabPanels = Children.map(children, (child, index) => {
    if (!isValidElement(child)) {
      return null;
    }
    return activeTab === index ? child : null;
  });
  return <>{tabPanels}</>;
};

export const Panel = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
