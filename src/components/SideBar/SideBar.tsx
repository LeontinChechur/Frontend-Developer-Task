
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import classnames from "classnames";

import { ROUTES } from "../../shared/const/router";

import "./SideBar.scss";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route: string) => location.pathname === route;

  return (
    <Drawer variant="permanent" className="drawer">
      <List>
        <ListItem
          onClick={() => navigate(ROUTES.DATA_TABLE)}
          className={classnames("listItem", { active: isActive(ROUTES.DATA_TABLE) })}
        >
          <ListItemIcon
            className={classnames("listItemIcon", { active: isActive(ROUTES.DATA_TABLE) })}
          >
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Data Table" />
        </ListItem>

        <ListItem
          onClick={() => navigate(ROUTES.TIMELINE)}
          className={classnames("listItem", { active: isActive(ROUTES.TIMELINE) })}
        >
          <ListItemIcon
            className={classnames("listItemIcon", { active: isActive(ROUTES.TIMELINE) })}
          >
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Patient Timeline" />
        </ListItem>
      </List>
    </Drawer>
  );
};
