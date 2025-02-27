import { FormElementsType } from "@/validation/types";

export interface PaginatedResponseType {
  total: number;
}

export type FormType = {
  id: string;
  isActive: boolean;
  name: string;
  attributes: FormElementsType[];
  user: string;
  createdAt: string;
  updatedAt: string;
};
