import { Document } from './document';

export interface DocumentResponse {
  documents: Document[];
  totalSize: number;
}
