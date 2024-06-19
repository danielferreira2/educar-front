import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { GetAllDocumentsParams } from '../../../../services/documents/types';
import { filesRepositoryValidationSchema } from './validations';

export function useFilesRepositorySearchFieldsForm() {
  const form = useForm<GetAllDocumentsParams>({
    resolver: yupResolver(filesRepositoryValidationSchema),
    defaultValues: {
      title: null,
      dateStart: null,
      dateEnd: null,
      type: 'none',
      keyword: null,
      author: null,
      researchArea: null,
      language: 'none',
    },
  });

  form.watch('dateStart');
  form.watch('dateEnd');
  // ---------------------------------------------
  // Functions
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  const { dateStart, dateEnd } = form.getValues();
  // ---------------------------------------------
  // API

  return {
    ...form,
    dateStart,
    dateEnd,
  };
}
