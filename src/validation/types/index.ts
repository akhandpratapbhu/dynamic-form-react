export interface FormElementsType {
  id: string;
  label: string;
  name:string
  DataTypeTableID: string;
  isRequired: boolean;
  options?: { label: string; value: string }[];
}
