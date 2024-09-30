import { useState } from "react";

import DataGridContent from "../../components/DataGridContent/DataGridContent";

import { generateMockData } from "../../shared/data/mockData";
import { createColumns } from "../../shared/helpers/commonColumns.helper";
import { MockDataRow } from "../../shared/interfaces/interfaces";

const mockData: MockDataRow[] = generateMockData(10000);

const columns = createColumns([
  "id",
  "name",
  "field1",
  "field2",
  "field3",
  "field4",
  "field5",
  "field6",
  "field7",
  "field8",
  "field9",
  "field10",
  "field11",
  "field12",
  "field13",
  "field14",
  "field15",
  "field16",
  "field17",
  "field18",
  "field19",
  "field20",
  "field21",
  "field22",
  "field23",
  "field24",
  "field25",
  "field26",
  "field27",
  "field28",
  "field29",
  "field30",
]);

const DataGridPage1 = () => {
  const [selectedRow, setSelectedRow] = useState<MockDataRow | null>(null);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 5,
  });

  return (
    <DataGridContent
      hasTitles={true}
      title="Page 1"
      rows={mockData}
      columns={columns}
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

export default DataGridPage1;
