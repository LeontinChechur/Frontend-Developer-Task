import { useNavigate, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

import { ROUTES } from "../../shared/const/router";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "200px",
        flexShrink: 0,
        position: "static",
        cursor: "pointer",
        border: "1px solid #ddd",
        "& .MuiDrawer-paper": {
          width: "200px",
          top: "75px",
          boxSizing: "border-box",
          position: "fixed",
        },
      }}
    >
      <List>
        <ListItem
          onClick={() => navigate(ROUTES.DATA_TABLE)}
          sx={{
            color: location.pathname === ROUTES.DATA_TABLE ? "#1976d2" : "inherit",
          }}
        >
          <ListItemText primary="Data Table" className="" />
        </ListItem>
        <ListItem
          onClick={() => navigate(ROUTES.TIMELINE)}
          sx={{
            color: location.pathname === ROUTES.TIMELINE ? "#1976d2" : "inherit",
          }}
        >
          <ListItemText primary="Patient Timeline" />
        </ListItem>
      </List>
    </Drawer>
  );
};
