import { useForm } from 'react-hook-form';
import { AuthenticationParams } from '../../../../contexts/auth/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from './validations';

export function useLoginForm() {
  const form = useForm<AuthenticationParams>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
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
  };
}
