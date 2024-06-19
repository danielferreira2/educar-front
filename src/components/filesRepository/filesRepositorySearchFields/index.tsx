import { DateRangePicker } from '@mui/lab';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from '@mui/material';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import { GetAllDocumentsParams } from '../../../services/documents/types';
import DocumentTypeSelect from '../../selects/documentTypeSelect';
import { LanguagesSelect } from '../../selects/languagesSelect';
import { useFilesRepositorySearchFieldsForm } from './useFilesRepositorySearchFieldsForm';

interface FilesRepositorySearchFieldsProps {
  onSearch: (params: GetAllDocumentsParams) => void;
  loading: boolean;
}

export function FilesRepositorySearchFields({
  onSearch,
  loading,
}: FilesRepositorySearchFieldsProps) {
  const { handleSubmit, control, setValue, dateStart, dateEnd } =
    useFilesRepositorySearchFieldsForm();

  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <Container maxWidth={'lg'}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className={'flex flex-col'}
        onSubmit={handleSubmit(onSearch)}
      >
        <section
          className={
            'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 w-full'
          }
        >
          <div className={'w-full'}>
            <Controller
              name={'title'}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="title"
                  label="Título"
                  variant="outlined"
                  className={'w-full'}
                  value={field.value || ''}
                  onChange={(evt) =>
                    field.onChange(
                      evt.target.value.trim() !== '' ? evt.target.value : null
                    )
                  }
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className={'w-full lg:col-span-2'}>
            <DateRangePicker
              startText="Data de inicio"
              inputFormat={'dd/MM/yyyy'}
              endText="Data fim"
              value={[dateStart, dateEnd]}
              onChange={(newValue) => {
                setValue('dateStart', newValue[0]);
                setValue('dateEnd', newValue[1]);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} fullWidth />
                  <Box sx={{ mx: 2 }}> até </Box>
                  <TextField {...endProps} fullWidth />
                </React.Fragment>
              )}
            />
          </div>
          <div className={'w-full'}>
            <Controller
              name={'type'}
              control={control}
              render={({ field, fieldState }) => (
                <DocumentTypeSelect
                  name={field.name}
                  value={field.value || ''}
                  onChange={field.onChange}
                  error={fieldState.invalid}
                  noneOption
                />
              )}
            />
          </div>
          <div className={'w-full'}>
            <Controller
              name={'keyword'}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="keywords"
                  label="Palavra chave"
                  variant="outlined"
                  className={'w-full'}
                  value={field.value || ''}
                  onChange={(evt) =>
                    field.onChange(
                      evt.target.value.trim() !== '' ? evt.target.value : null
                    )
                  }
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className={'w-full'}>
            <Controller
              name={'author'}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="author"
                  label="Autor"
                  variant="outlined"
                  className={'w-full'}
                  value={field.value || ''}
                  onChange={(evt) =>
                    field.onChange(
                      evt.target.value.trim() !== '' ? evt.target.value : null
                    )
                  }
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className={'w-full'}>
            <Controller
              name={'researchArea'}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  id="researchArea"
                  label="Área de pesquisa"
                  variant="outlined"
                  className={'w-full'}
                  value={field.value || ''}
                  onChange={(evt) =>
                    field.onChange(
                      evt.target.value.trim() !== '' ? evt.target.value : null
                    )
                  }
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className={'w-full'}>
            <Controller
              name={'language'}
              control={control}
              render={({ field, fieldState }) => (
                <LanguagesSelect
                  name={field.name}
                  value={field.value || ''}
                  onChange={field.onChange}
                  error={fieldState.invalid}
                  noneOption
                />
              )}
            />
          </div>
        </section>
        <div className={'flex justify-end w-full'}>
          <Button type={'submit'} variant={'contained'}>
            Buscar
            {loading && <CircularProgress size={20} />}
          </Button>
        </div>
      </Box>
    </Container>
  );
}
