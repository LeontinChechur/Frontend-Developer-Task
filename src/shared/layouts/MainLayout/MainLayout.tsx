import { memo } from "react";
import { Outlet } from "react-router-dom";

import { TopPanel } from "../../../components/TopPanel/TopPanel";
import { Sidebar } from "../../../components/SideBar/SideBar";
import { useTheme } from "../../../styles/ThemeContext";

import "./MainLayout.scss";

export const MainLayout = memo(() => {
  const { toggleTheme } = useTheme();

  return (
    <main className="main-layout">
      <TopPanel toggleTheme={toggleTheme} />
      <div className="main-layout__content">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
});

