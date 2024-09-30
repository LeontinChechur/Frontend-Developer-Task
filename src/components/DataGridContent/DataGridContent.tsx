import { useEffect, useState } from "react";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { TextField, Typography } from "@mui/material";

import { BottomDetailsPanel } from "../../components/BottomDetailsPannel/BottomDetailsPannel";
import { DataGridColumnConfig } from "../../shared/interfaces/interfaces";

import "./DataGridContent.scss";

const DataGridContent = ({
  hasTitles = true,
  title = "",
  rows = [],
  columns = [],
  paginationModel = {
    page: 0,
    pageSize: 0,
  },
  onPaginationModelChange,
  onRowSelectionModelChange,
  selectedRow,
}: DataGridColumnConfig) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredRows, setFilteredRows] = useState(rows);

  const filterRows = (query: string) => {
    if (!query) {
      return rows;
    }

    const lowerCaseQuery = query.toLowerCase();

    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
  };

  useEffect(() => {
    const filtered = filterRows(searchQuery);
    setFilteredRows(filtered);
  }, [searchQuery, rows]);

  return (
    <div className="data-grid">
      {hasTitles && (
        <div className="data-grid__header">
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <TextField
            className="data-grid__header-search"
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}
      <div className="data-grid__content">
        <DataGridPremium
          rows={filteredRows}
          columns={columns}
          paginationModel={paginationModel}
          onPaginationModelChange={onPaginationModelChange}
          onRowSelectionModelChange={onRowSelectionModelChange}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
          }
          sx={{
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#dddd",
            },
            "& .MuiDataGrid-cell": {
              border: "none",
              outline: "none",
            },
          }}
        />
      </div>
      <div className="data-grid__details">
        {selectedRow && <BottomDetailsPanel selectedRow={selectedRow} />}
      </div>
    </div>
  );
};

export default DataGridContent;
