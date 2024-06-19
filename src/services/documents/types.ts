import { DocumentType } from './schemas/documentType';
import { Language } from './schemas/language';

export interface GetAllDocumentsParams {
  title?: string | null;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  type?: DocumentType | 'none' | null;
  page?: number | null;
  perPage?: number | null;
  keyword?: string | null;
  author?: string | null;
  researchArea?: string | null;
  language?: Language | 'none' | null;
}

export interface CreateDocumentParams {
  title: string;
  description: string;
  type: DocumentType;
  researchArea: string;
  library: string;
  file: FileList;
  date: Date;
  authors: string[];
  keywords: string[];
  language: Language;
}
