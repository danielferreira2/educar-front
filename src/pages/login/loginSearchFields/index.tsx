import styled from '@emotion/styled';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from '@mui/material';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import { AuthenticationParams } from '../../../contexts/auth/types';
import { useLoginForm } from './useLoginForm';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 9999,
    },
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 16,

    padding: '18px 12px',
  },
});

export interface LoginSearchFieldsProps {
  onLogin: (params: AuthenticationParams) => void;
  loading: boolean;
}

export function LoginSearchFields({
  onLogin,
  loading,
}: LoginSearchFieldsProps) {
  const { handleSubmit, control } = useLoginForm();
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <Container
      maxWidth={'md'}
      className={
        'bg-educar-primary bg-opacity-80 p-8 rounded-2xl md:rounded-tl-curveLogin my-8 md:rounded-br-curveLogin'
      }
    >
      <h2 className={'text-4xl text-white text-center font-bold'}>Entrar</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onLogin)}
        className={
          'flex flex-col justify-center items-center max-w-lg my-8 mx-auto'
        }
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <div className={'max-w-lg w-full'}>
              <label htmlFor={'email'} className={'ml-4 text-white font-bold'}>
                Email
              </label>
              <CssTextField
                id="email"
                type={'email'}
                value={field.value}
                name={field.name}
                onBlur={field.onBlur}
                onChange={field.onChange}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                className={'text-gray-600 w-full py-4'}
                inputProps={{
                  style: {
                    borderRadius: 9999,
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: 18,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={'Digite seu email'}
              />
            </div>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <div className={'max-w-lg w-full'}>
              <label
                htmlFor={'password'}
                className={'ml-4 text-white font-bold'}
              >
                Password
              </label>
              <CssTextField
                id="password"
                type={'password'}
                value={field.value}
                name={field.name}
                onBlur={field.onBlur}
                onChange={field.onChange}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                className={'text-gray-600 w-full py-4'}
                inputProps={{
                  style: {
                    borderRadius: 9999,
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: 18,
                    fontWeight: 'bold',
                  },
                }}
                placeholder={'Digite a senha'}
              />
            </div>
          )}
        />
        <Button
          type={'submit'}
          variant={'contained'}
          className={'bg-educar-primary text-2xl py-4 px-12 rounded-3xl'}
          disabled={loading}
        >
          Acessar
          {loading && <CircularProgress />}
        </Button>
      </Box>
    </Container>
  );
}
