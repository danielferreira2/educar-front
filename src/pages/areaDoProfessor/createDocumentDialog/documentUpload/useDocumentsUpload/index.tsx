import * as React from 'react';
import { toast } from 'react-toastify';
import { DocumentUploadProps } from '..';
import { DocumentsService } from '../../../../../services/documents';

export type UseDocumentsUploadProps = DocumentUploadProps;

export function useDocumentsUpload({ onFileChange }: UseDocumentsUploadProps) {
  const [loading, setLoading] = React.useState(false);
  const [filelist, setFileList] = React.useState<FileList | null>(null);
  const [uploaded, setUploaded] = React.useState(false);

  // ---------------------------------------------
  // Functions
  const uploadFile = React.useCallback(async () => {
    if (filelist) {
      try {
        setLoading(true);
        const formData = new FormData();

        formData.append(`file`, filelist[0], filelist[0].name);

        const response = await DocumentsService.upload(formData);

        toast.success(response.message);
        onFileChange(response.pathName);
        setUploaded(true);

        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setUploaded(false);
        toast.error(error.response?.data?.message);
        console.log(error);
      }
    }
  }, [filelist, onFileChange]);
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    loading,
    setFileList,
    uploadFile,
    filelist,
    uploaded,
  };
}
