import { createRoutesFromElements, Route } from "react-router-dom";

import { ROUTES } from "./shared/const/router";
import { MainLayout } from "./shared/layouts/MainLayout";

import DataGridPage1 from "./pages/DataGridPage1/DataGridPage1";
import DataGridPage2 from "./pages/DataGridPage2/DataGridPage2";

export const AppRoutes = createRoutesFromElements(
  <Route path={ROUTES.MAIN} element={<MainLayout />}>
    <Route path={ROUTES.PAGE1} element={<DataGridPage1 />} />
    <Route path={ROUTES.PAGE2} element={<DataGridPage2 />} />
  </Route>
);
