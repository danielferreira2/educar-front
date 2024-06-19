import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  email: Yup.string().email().required().typeError('Email é obrigatório'),
  password: Yup.string().required().typeError('Senha é obrigatória'),
});
