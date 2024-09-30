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
          onClick={() => navigate(ROUTES.PAGE1)}
          sx={{
            color: location.pathname === ROUTES.PAGE1 ? "#1976d2" : "inherit",
          }}
        >
          <ListItemText primary="Page 1" className="" />
        </ListItem>
        <ListItem
          onClick={() => navigate(ROUTES.PAGE2)}
          sx={{
            color: location.pathname === ROUTES.PAGE2 ? "#1976d2" : "inherit",
          }}
        >
          <ListItemText primary="Page 2" />
        </ListItem>
      </List>
    </Drawer>
  );
};
