import { GridRowSelectionModel, GridCallbackDetails } from '@mui/x-data-grid';

export interface ColumnConfig {
  idField: string;
  nameField: string;
  customFields?: Array<{ field: string; headerName: string; width: number }>;
}

export interface ClientDataState {
  data: Item[];
}

export interface ButtonProps {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
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

export interface ViewButton {
  isHorizontal: boolean;
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
  dob: string;
  gender: string;
  billing_class: string;
  patient_id: number;
  line: number;
  dos_from: string;
  code: number;
  units: number;
  charges: number;
  allowed: number;
  benefit: number;
  copay: number;
  revcode: string;
  rend_provider_id: number;
  dx1: string;
  dx2: string;
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
