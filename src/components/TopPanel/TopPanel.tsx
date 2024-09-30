import { AppBar, Toolbar, Typography } from "@mui/material";

export const TopPanel = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">My Application</Typography>
      </Toolbar>
    </AppBar>
  );
};
