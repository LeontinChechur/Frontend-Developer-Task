import { Paper, Typography } from "@mui/material";

import { MockDataRow } from "../../shared/interfaces/interfaces";

import "./BottomDetailsPannel.scss";

interface BottomDetailsPanelProps {
  selectedRow?: MockDataRow;
  columns: { field: string; headerName: string }[];
}

export const BottomDetailsPanel = ({
  selectedRow,
  columns,
}: BottomDetailsPanelProps) => {
  const fieldToHeaderMap = columns?.reduce(
    (acc, col) => ({ ...acc, [col.field]: col.headerName }),
    {} as Record<string, string>
  );

  return (
    <Paper className="bottomDetailsPannel">
      <Typography variant="h6" className="bottomDetailsPannel-header">
        <span>Details</span>
      </Typography>
      {selectedRow ? (
        <div className="bottomDetailsPannel-content">
          {Object.entries(selectedRow).map(([key, value]) => (
            <Typography key={key}>
              <strong>{fieldToHeaderMap[key]}:</strong>
              <span>{String(value)}</span>
            </Typography>
          ))}
        </div>
      ) : (
        <Typography>
          <span>No row selected</span>
        </Typography>
      )}
    </Paper>
  );
};
