export interface FormElementsType {
  id: string;
  label: string;
  name:string
  DataType: string;
  isRequired: boolean;
  options?: { label: string; value: string }[];
}
