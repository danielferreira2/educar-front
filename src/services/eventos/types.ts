export interface Eventos {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  type: string;
  date: string;
}

export interface EventosResponse {
  eventos: Eventos[];
}

export enum EnumEventoType {
  PRESENCIAL = 'presencial',
  ONLINE = 'online',
}
