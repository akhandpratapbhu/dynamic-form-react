import { FormElementsType } from "@/validation/types";

export interface PaginatedResponseType {
  total: number;
}

export type FormType = {
  _id: string;
  isActive: boolean;
  name: string;
  elements: FormElementsType[];
  user: string;
  createdAt: string;
  updatedAt: string;
};
