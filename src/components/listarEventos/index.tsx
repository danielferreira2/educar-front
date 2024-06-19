import { Chip, Grid, Skeleton } from '@mui/material';
import moment from 'moment';
import * as React from 'react';
import { EventosService } from '../../services/eventos';
import { EnumEventoType, Eventos } from '../../services/eventos/types';

export function ListarEventos() {
  const [loading, setLoading] = React.useState(false);
  const [eventos, setEventos] = React.useState<Eventos[]>();

  const getAllEvents = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await EventosService.getAllEvents();
      setEventos(response.eventos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <React.Fragment>
      {loading
        ? Array.from(new Array(4)).map((event, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className={'flex my-8 cursor-pointer'}
              key={index}
              onClick={() => alert('heljhi')}
            >
              <Skeleton
                variant={'rectangular'}
                className={
                  'max-w-cardMedium w-cardMedium h-cardSmall max-h-cardSmall'
                }
              />
              <div className={'flex flex-col justify-between ml-4 w-full'}>
                <Skeleton
                  variant={'rectangular'}
                  height={40}
                  animation={'wave'}
                />
                <Skeleton variant={'text'} animation={'wave'} />
                <Skeleton variant={'text'} animation={'wave'} />
                <Skeleton variant={'text'} animation={'wave'} />
                <Skeleton variant={'text'} animation={'wave'} />

                <div className={'flex justify-between mt-4 w-full'}>
                  <Skeleton
                    variant={'text'}
                    animation={'wave'}
                    width={'30%'}
                    height={40}
                  />
                  <Skeleton
                    variant={'text'}
                    animation={'wave'}
                    width={'30%'}
                    height={40}
                  />
                </div>
              </div>
            </Grid>
          ))
        : eventos?.map((evento, idx) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className={'flex my-8 cursor-pointer flex-col md:flex-row'}
              key={idx}
              onClick={() => alert('heljhi')}
            >
              <img
                src={evento.image}
                alt={evento.title.slice(0, 80)}
                className={
                  'max-w-cardMedium w-cardMedium h-cardSmall max-h-cardSmall my-0 mx-auto'
                }
              />
              <div className={'flex flex-col justify-between ml-4'}>
                <h3 className={'text-2xl font-bold'}>{evento.title}</h3>
                <p className={'text-lg font-bold mt-2 text-gray-600'}>
                  {evento.description.slice(0, 400)}
                </p>
                <div className={'flex justify-between mt-4 '}>
                  <p className={'text-educar-primary font-bold text-2xl'}>
                    {moment(evento.date).format('DD/MM/YYYY')}
                  </p>
                  <Chip
                    label={
                      evento.type.charAt(0).toUpperCase() + evento.type.slice(1)
                    }
                    className={
                      (evento.type === EnumEventoType.PRESENCIAL
                        ? 'bg-educar-negative-primary'
                        : 'bg-educar-sucess-primary') +
                      ' text-2xl text-white font-bold py-6 px-4 rounded-full'
                    }
                  />
                </div>
              </div>
            </Grid>
          ))}
    </React.Fragment>
  );
}
