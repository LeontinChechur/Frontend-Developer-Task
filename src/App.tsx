import { createRoutesFromElements, Route } from "react-router-dom";

import { ROUTES } from "./shared/const/router";
import { MainLayout } from "./shared/layouts/MainLayout";

import DataTablePage from "./pages/DataTablePage/DataTablePage";
import TimeLinePage from "./pages/TimeLinePage/TimeLinePage";

export const AppRoutes = createRoutesFromElements(
  <Route path={ROUTES.MAIN} element={<MainLayout />}>
    <Route path={ROUTES.DATA_TABLE} element={<DataTablePage />} />
    <Route path={ROUTES.TIMELINE} element={<TimeLinePage />} />
  </Route>
);
