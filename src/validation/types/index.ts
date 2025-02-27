export interface FormElementsType {
  id: string;
  label: string;
  dataType: string;
  isRequired: boolean;
  options?: { label: string; value: string }[];
}
