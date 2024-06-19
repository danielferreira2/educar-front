import * as React from 'react';
import { DocumentsService } from '../../../services/documents';
import { Document } from '../../../services/documents/schemas/document';
import { GetAllDocumentsParams } from '../../../services/documents/types';

export function useFilesRepositoryService() {
  const [documents, setDocuments] = React.useState<Document[]>();
  const [loading, setLoading] = React.useState(false);
  const [filters, setFilters] = React.useState<GetAllDocumentsParams>({
    title: null,
    dateStart: null,
    dateEnd: null,
    type: 'none',
    keyword: null,
    author: null,
    researchArea: null,
    language: 'none',
  });
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [totalSize, setTotalSize] = React.useState(10);
  // ---------------------------------------------
  // Functions
  const getDocuments = React.useCallback(
    async (params?: GetAllDocumentsParams) => {
      try {
        setLoading(true);
        const paramsUpdated: GetAllDocumentsParams = {
          ...params,
          page: page + 1,
          perPage: itemsPerPage,
          type: params?.type?.trim() === 'none' ? null : params?.type,
          language:
            params?.language?.trim() === 'none' ? null : params?.language,
        };
        const response = await DocumentsService.getAll(paramsUpdated);
        setDocuments(response.documents);
        setTotalSize(response.totalSize);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        console.log(error);
      }
    },
    [page, itemsPerPage]
  );
  // ---------------------------------------------
  // Effects
  React.useEffect(() => {
    if (filters) {
      getDocuments(filters);
    }
  }, [filters, getDocuments]);

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    documents,
    loading,
    setFilters,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    totalSize,
  };
}
