import { memo } from "react";
import { Outlet } from "react-router-dom";

import { TopPanel } from "../../../components/TopPanel/TopPanel";
import { Sidebar } from "../../../components/SideBar/SideBar";

import "./MainLayout.scss";

export const MainLayout = memo(() => {
  return (
    <main className="main-layout">
      <TopPanel />
      <div className="main-layout__content">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
});
