import { TablePagination } from '@mui/material';
import * as React from 'react';
import { DocumentsFound } from './documentsFound';
import { FilesRepositorySearchFields } from './filesRepositorySearchFields';
import { useFilesRepositoryService } from './useFilesRepositoryService';

export function FilesRepository() {
  const {
    documents,
    loading,
    setFilters,
    page,
    setPage,
    itemsPerPage,
    setItemsPerPage,
    totalSize,
  } = useFilesRepositoryService();

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <section>
      <h2
        className={'text-7xl text-center font-medium my-4 text-educar-primary'}
      >
        Biblioteca
      </h2>
      <FilesRepositorySearchFields onSearch={setFilters} loading={loading} />
      <DocumentsFound documents={documents} loading={loading} />
      <section>
        <TablePagination
          className="mt-8"
          component="div"
          count={totalSize}
          page={page}
          onPageChange={(evt, page) => setPage(page)}
          rowsPerPage={itemsPerPage}
          onRowsPerPageChange={(evt) => {
            setItemsPerPage(parseInt(evt.target.value));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10]}
        />
      </section>
    </section>
  );
}
