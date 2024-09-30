import { GridRowSelectionModel, GridCallbackDetails } from '@mui/x-data-grid';

export interface ColumnConfig {
  idField: string;
  nameField: string;
  customFields?: Array<{ field: string; headerName: string; width: number }>;
}

export interface ClientDataState {
  data: Item[];
}

export interface RootState {
  clientData: ClientDataState;
}

export interface Column {
  field: string;
  headerName: string;
  width?: number;
}

export interface PaginationModel {
  page: number;
  pageSize: number;
}

export interface DataGridColumnConfig {
  hasTitles?: boolean;
  title?: string;
  rows?: MockDataRow[];
  columns?: Column[];
  paginationModel?: PaginationModel;
  onPaginationModelChange?: (model: { page: number; pageSize: number }) => void;
  onRowSelectionModelChange?: (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails) => void;
  selectedRow?: MockDataRow | null;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export interface Item {
  id: number | string;
  dob: string;
  gender: string;
  billing_class: string;
  patient_id: number;
  line: number;
  dos_from: string;
  revcode: number | string;
  code: [];
  units: number;
  charges: number;
  rend_provider_id: number;
  dx1: [];
  dx2?: [];
  allowed: number;
  benefit: number;
  copay: number;
}

export interface MockDataRow {
  id: number;
  name: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
  field10: string;
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: string;
  field16: string;
  field17: string;
  field18: string;
  field19: string;
  field20: string;
  field21: string;
  field22: string;
  field23: string;
  field24: string;
  field25: string;
  field26: string;
  field27: string;
  field28: string;
  field29: string;
  field30: string;
}
