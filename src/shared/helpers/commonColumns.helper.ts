export const createColumns = (visibleFields: string[]) => {
  const allColumns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "field1", headerName: "Field 1" },
    { field: "field2", headerName: "Field 2" },
    { field: "field3", headerName: "Field 3" },
    { field: "field4", headerName: "Field 4" },
    { field: "field5", headerName: "Field 5" },
    { field: "field6", headerName: "Field 6" },
    { field: "field7", headerName: "Field 7" },
    { field: "field8", headerName: "Field 8" },
    { field: "field9", headerName: "Field 9" },
    { field: "field10", headerName: "Field 10" },
    { field: "field11", headerName: "Field 11" },
    { field: "field12", headerName: "Field 12" },
    { field: "field13", headerName: "Field 13" },
    { field: "field14", headerName: "Field 14" },
    { field: "field15", headerName: "Field 15" },
    { field: "field16", headerName: "Field 16" },
    { field: "field17", headerName: "Field 17" },
    { field: "field18", headerName: "Field 18" },
    { field: "field19", headerName: "Field 19" },
    { field: "field20", headerName: "Field 20" },
    { field: "field21", headerName: "Field 21" },
    { field: "field22", headerName: "Field 22" },
    { field: "field23", headerName: "Field 23" },
    { field: "field24", headerName: "Field 24" },
    { field: "field25", headerName: "Field 25" },
    { field: "field26", headerName: "Field 26" },
    { field: "field27", headerName: "Field 27" },
    { field: "field28", headerName: "Field 28" },
    { field: "field29", headerName: "Field 29" },
    { field: "field30", headerName: "Field 30" },
  ];

  return allColumns.filter((col) => visibleFields.includes(col.field));
};
