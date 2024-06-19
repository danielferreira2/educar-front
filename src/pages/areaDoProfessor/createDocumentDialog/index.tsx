import { DatePicker } from '@mui/lab';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import DocumentTypeSelect from '../../../components/selects/documentTypeSelect';
import { LanguagesSelect } from '../../../components/selects/languagesSelect';
import { LibrariesSelect } from '../../../components/selects/librariesSelect';
import { DocumentUpload } from './documentUpload';
import { useCreateDocumentForm } from './useCreateDocumentForm';
import { useCreateDocumentService } from './useCreateDocumentService';

export interface CreateDocumentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateDocumentDialog({
  isOpen,
  onClose,
}: CreateDocumentDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const { control, handleSubmit, reset } = useCreateDocumentForm();
  const { createDocument, loading } = useCreateDocumentService({
    reset,
    onFinish: onClose,
  });

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        maxWidth={'lg'}
        fullWidth
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={handleSubmit(createDocument)}>
          <DialogTitle
            id="responsive-dialog-title"
            className={'text-4xl text-center my-4'}
          >
            Criar Documento
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} className={'my-4'}>
              <Grid item sm={12} className={'my-2'}>
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
                      onChange={field.onChange}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} className={'my-2'}>
                <Controller
                  name={'description'}
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      id="description"
                      label="Descrição"
                      variant="outlined"
                      className={'w-full'}
                      value={field.value || ''}
                      onChange={field.onChange}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} lg={6}>
                <div className={'my-2'}>
                  <Controller
                    name={'type'}
                    control={control}
                    render={({ field, fieldState }) => (
                      <DocumentTypeSelect
                        value={field.value || ''}
                        onChange={field.onChange}
                        error={fieldState.invalid}
                        name={field.name}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item sm={12} lg={6}>
                <div className={'my-2'}>
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
                        onChange={field.onChange}
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item sm={12} lg={6}>
                <div className={'my-2'}>
                  <Controller
                    name={'library'}
                    control={control}
                    render={({ field, fieldState }) => (
                      <LibrariesSelect
                        name={field.name}
                        value={field.value || ''}
                        onChange={field.onChange}
                        error={fieldState.invalid}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item sm={12} lg={6}>
                <div className={'my-2'}>
                  <Controller
                    name={'file'}
                    control={control}
                    render={({ field, fieldState }) => (
                      <DocumentUpload
                        onFileChange={(fileAddress) => {
                          console.log(fileAddress);
                          field.onChange(fileAddress);
                        }}
                        error={fieldState.invalid}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item sm={12} lg={3}>
                <div className={'my-2'}>
                  <Controller
                    name={'date'}
                    control={control}
                    render={({ field, fieldState }) => (
                      <DatePicker
                        label="Data de publicação"
                        value={field.value || null}
                        onChange={field.onChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={fieldState.invalid}
                            helperText={fieldState.error?.message}
                            fullWidth
                          />
                        )}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item sm={12} lg={3} className={'my-2'}>
                <Controller
                  name={'authors'}
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      id="authors"
                      label="Autores - Separar por vírgula"
                      variant="outlined"
                      className={'w-full'}
                      value={field.value || ''}
                      onChange={(evt) => {
                        const authors = evt.target.value.trim().split(',');
                        console.log(authors);
                        field.onChange(authors);
                      }}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} lg={3} className={'my-2'}>
                <Controller
                  name={'keywords'}
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      id="keywords"
                      label="Palavras chave - Separar por vírgula"
                      variant="outlined"
                      className={'w-full'}
                      value={field.value || ''}
                      onChange={(evt) => {
                        const keywords = evt.target.value.trim().split(',');
                        console.log(keywords);
                        field.onChange(keywords);
                      }}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} lg={3}>
                <div className={'my-2'}>
                  <Controller
                    name={'language'}
                    control={control}
                    render={({ field, fieldState }) => (
                      <LanguagesSelect
                        name={field.name}
                        value={field.value || ''}
                        onChange={field.onChange}
                        error={fieldState.invalid}
                      />
                    )}
                  />
                </div>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={onClose}
              variant={'contained'}
              color={'primary'}
            >
              Cancelar
            </Button>
            <Button type={'submit'} autoFocus variant={'outlined'}>
              Cadastrar
              {loading && <CircularProgress />}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
