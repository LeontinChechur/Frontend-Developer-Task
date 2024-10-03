import { useNavigate } from "react-router";
import { AppBar, Toolbar, Typography } from "@mui/material";

import { MaterialUISwitch } from "../UI/ThemeSwitcher/ThemeSwitcher";
import { ROUTES } from "../../shared/const/router";
import { useTheme } from "../../styles/ThemeContext";

import "./TopPanel.scss";

interface TopPanelProps {
  toggleTheme: () => void;
}

export const TopPanel = ({ toggleTheme }: TopPanelProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate()

  return (
    <AppBar
      position="fixed"
      className="topPanel"
    >
      <Toolbar>
        <Typography variant="h6">
          <span onClick={() => navigate(ROUTES.MAIN)}>My Application</span>
        </Typography>
        <MaterialUISwitch
          className="topPanel-switcher"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </Toolbar>
    </AppBar>
  );
};
