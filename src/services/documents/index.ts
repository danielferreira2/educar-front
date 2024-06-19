import axios from 'axios';
import { Environment } from '../../environment';
import { DocumentResponse } from './schemas/documentResponse';
import { UploadResponse } from './schemas/uploadResponse';
import { CreateDocumentParams, GetAllDocumentsParams } from './types';

const url = `${Environment.API_URL}/documents`;

async function getAll(params?: GetAllDocumentsParams) {
  const response = await axios.get<DocumentResponse>(url, {
    params,
  });

  return response.data;
}

async function download(id: string) {
  const urlUpdate = `${Environment.API_URL}/document/download/${id}`;
  await axios
    .get(urlUpdate, {
      responseType: 'blob',
    })
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', id);
      document.body.appendChild(link);
      link.click();
    })
    .catch((error) => {
      alert(error);
    });
}

async function create(body: CreateDocumentParams) {
  const url = `${Environment.API_URL}/document`;
  const response = await axios.post<{ message: string }>(url, body);

  return response.data;
}

async function upload(formData: FormData) {
  const url = `${Environment.API_URL}/document/upload`;
  const response = await axios.post<UploadResponse>(url, formData);

  return response.data;
}

export const DocumentsService = {
  getAll,
  download,
  create,
  upload,
};
