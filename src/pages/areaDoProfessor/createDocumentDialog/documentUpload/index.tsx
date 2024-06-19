import { Button, CircularProgress } from '@mui/material';
import * as React from 'react';
import { useDocumentsUpload } from './useDocumentsUpload';

export interface DocumentUploadProps {
  onFileChange: (fileAddress: string) => void;
  error?: boolean;
  helperText?: string;
}

export function DocumentUpload({
  onFileChange,
  error,
  helperText,
}: DocumentUploadProps) {
  const { loading, filelist, setFileList, uploadFile, uploaded } =
    useDocumentsUpload({
      onFileChange,
    });
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <div className={'flex justify-between'}>
      <label htmlFor="contained-button-file">
        <input
          accept="application/pdf"
          id="contained-button-file"
          type="file"
          onChange={(evt) => setFileList(evt.target.files)}
          name={'documentUpload'}
          onDrop={(evt) => {
            evt.preventDefault();
          }}
        />
        {error && <p className={'text-red-800'}>{helperText}</p>}
      </label>
      <Button
        variant="contained"
        component="span"
        onClick={uploadFile}
        disabled={!filelist || uploaded}
      >
        Upload
        {loading && <CircularProgress />}
      </Button>
    </div>
  );
}
