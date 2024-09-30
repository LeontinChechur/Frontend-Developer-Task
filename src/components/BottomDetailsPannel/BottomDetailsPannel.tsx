import { Paper, Typography } from "@mui/material";

import { MockDataRow } from "../../shared/interfaces/interfaces";

import "./BottomDetailsPannel.scss";

interface BottomDetailsPanelProps {
  selectedRow?: MockDataRow;
}

export const BottomDetailsPanel = ({
  selectedRow,
}: BottomDetailsPanelProps) => {
  return (
    <Paper className="bottomDetailsPannel">
      <Typography variant="h6" className="bottomDetailsPannel-header">
        Details
      </Typography>
      {selectedRow ? (
        <div className="bottomDetailsPannel-content">
          {Object.entries(selectedRow).map(([key, value]) => (
            <Typography key={key}>
              <strong>{key}:</strong> {String(value)}
            </Typography>
          ))}
        </div>
      ) : (
        <Typography>No row selected</Typography>
      )}
    </Paper>
  );
};
