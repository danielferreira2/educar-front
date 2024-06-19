import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CreateDocumentParams } from '../../../../services/documents/types';
import { createDocumentValidationSchema } from './validations';

export function useCreateDocumentForm() {
  const form = useForm<CreateDocumentParams>({
    resolver: yupResolver(createDocumentValidationSchema),
    defaultValues: {
      title: undefined,
      description: undefined,
      type: undefined,
      library: undefined,
      researchArea: undefined,
      file: undefined,
      authors: undefined,
      date: undefined,
      keywords: undefined,
      language: undefined,
    },
  });

  const file = form.watch('file');
  // ---------------------------------------------
  // Functions
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    ...form,
    file,
  };
}
