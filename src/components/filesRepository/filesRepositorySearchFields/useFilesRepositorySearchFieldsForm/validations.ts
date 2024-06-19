import * as Yup from 'yup';

export const filesRepositoryValidationSchema = Yup.object({
  name: Yup.string().notRequired().nullable(),
  dateStart: Yup.date().notRequired().nullable(),
  dateEnd: Yup.date().notRequired().nullable(),
  type: Yup.string().notRequired().nullable(),
  keyword: Yup.string().notRequired().nullable(),
  author: Yup.string().notRequired().nullable(),
  researchArea: Yup.string().notRequired().nullable(),
  language: Yup.string().notRequired().nullable(),
});
