import { DocumentType } from './documentType';

export interface Document {
  _id: string;
  title: string;
  description: string;
  type: DocumentType;
  file: string;
  researchArea: string;
  library: string;
  createdAt?: Date;
  updatedAt?: Date;
  authors: string[];
}
