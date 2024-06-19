import * as Yup from 'yup';

export const createDocumentValidationSchema = Yup.object({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  type: Yup.string().required('O tipo de documento é obrigatório'),
  researchArea: Yup.string().required('A área de pesquisa é obrigatória'),
  library: Yup.string().required('A biblioteca é obrigatória'),
  file: Yup.string().required('O arquivo é obrigatório'),
  authors: Yup.array().of(Yup.string()).required('O autor é obrigatório'),
  date: Yup.date().required('A data de publicação é obrigatória'),
  keywords: Yup.array()
    .of(Yup.string())
    .required('As palavras chaves são obrigatórias'),
  language: Yup.string().required('A linguagem é obrigatório'),
});
