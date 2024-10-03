import { useState } from "react";
import DataGridContent from "../../components/DataGridContent/DataGridContent";

import { generateMockData } from "../../shared/data/mockData";
import { MockDataRow } from "../../shared/interfaces/interfaces";
import { fieldTitles } from "./utils/fieldTitles";

const mockData: MockDataRow[] = generateMockData(10000);

const DataTablePage = () => {
  const [selectedRow, setSelectedRow] = useState<MockDataRow | null>(null);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  return (
    <DataGridContent
      hasTitles={true}
      title="Data table"
      rows={mockData}
      columns={fieldTitles}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      onRowSelectionModelChange={(rowSelectionModel) =>
        setSelectedRow(
          mockData.find((row) => row.id === rowSelectionModel[0]) || null
        )
      }
      selectedRow={selectedRow}
    />
  );
};

export default DataTablePage;
