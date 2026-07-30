"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type DashboardContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardContext = createContext<
  DashboardContextType | undefined
>(undefined);

export function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardContext.Provider
      value={{ sidebarOpen, setSidebarOpen }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider"
    );
  }

  return context;
}