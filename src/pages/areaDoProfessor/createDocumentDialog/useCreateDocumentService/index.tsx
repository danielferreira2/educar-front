import * as React from 'react';
import { UseFormReset } from 'react-hook-form';
import { toast } from 'react-toastify';
import { DocumentsService } from '../../../../services/documents';
import { CreateDocumentParams } from '../../../../services/documents/types';

interface UseCreateDocumentServiceProps {
  reset: UseFormReset<CreateDocumentParams>;
  onFinish: () => void;
}

export function useCreateDocumentService({
  reset,
  onFinish,
}: UseCreateDocumentServiceProps) {
  const [loading, setLoading] = React.useState(false);

  // ---------------------------------------------
  // Functions
  const createDocument = React.useCallback(
    async (params: CreateDocumentParams) => {
      try {
        setLoading(true);
        const response = await DocumentsService.create(params);
        toast.success(response.message);
        reset();
        onFinish();
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        toast.error(error.response?.data?.message);
      }
    },
    [reset, onFinish]
  );
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    createDocument,
    loading,
  };
}
