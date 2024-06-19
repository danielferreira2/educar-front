import { Card, CardActions, CardContent, Skeleton } from '@mui/material';
import * as React from 'react';
import { Document } from '../../../services/documents/schemas/document';
import moment from 'moment';
import { DocumentDownload } from '../../environment/documentDownload';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import ArticleIcon from '@mui/icons-material/Article';

export interface DocumentsFoundProps {
  documents?: Document[];
  loading: boolean;
}

export function DocumentsFound(props: DocumentsFoundProps) {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render
  return (
    <article className="flex justify-center w-full">
      {!props.loading && props.documents?.length === 0 && (
        <section className={'flex justify-center w-full'}>
          <div className={'flex flex-col items-center justify-center gap-4'}>
            <DoNotDisturbAltIcon className={'text-8xl text-gray-400'} />
            <h3 className={'text-2xl text-gray-400 font-semibold'}>
              Nenhum resultado foi encontrado
            </h3>
          </div>
        </section>
      )}
      <section
        className={
          'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-7'
        }
      >
        {!props.loading &&
          props.documents?.map((document, idx) => (
            <article
              key={idx}
              className={'flex gap-4 min-w-[27rem] max-w-[27rem] w-full'}
            >
              <ArticleIcon className={'text-8xl text-gray-400'} />
              <div className={'mt-2 w-full'}>
                <p className={'text-gray-400'}>{document.type}</p>
                <h3 className={'text-educar-primary font-bold text-xl mt-2'}>
                  {document.title}
                </h3>
                <div className={'mt-2'}>
                  {document.authors.map((author, idx) => (
                    <span key={idx} className={'italic text-gray-400'}>
                      {author}{' '}
                    </span>
                  ))}
                </div>
                <p className={'text-gray-400 mt-2'}>
                  Data de criação:{' '}
                  {moment(document.createdAt).format('DD/MM/YYYY')}
                </p>
                <div className={'flex justify-end mt-4'}>
                  <DocumentDownload
                    id={
                      document.file.split('/')[
                        document.file.split('/').length - 1
                      ]
                    }
                  />
                </div>
              </div>
            </article>
            // <Card key={idx} className={'w-full'}>
            //   <CardContent>
            //     <div className={'flex justify-between'}>
            //       <FolderIcon
            //         className={'text-8xl text-educar-primary -ml-2'}
            //       />
            //       <ReadonlyField
            //         label={'Publicação'}
            //         value={moment(document.createdAt).format('DD/MM/YYYY')}
            //         className={'mt-4'}
            //       />
            //     </div>
            //     <Typography gutterBottom variant="h5" component="div">
            //       {document.title}
            //     </Typography>
            //     <ReadonlyField
            //       label={'Descrição'}
            //       value={`${document.description.slice(0, 100)}...`}
            //       className={'my-2'}
            //     />
            //     <ReadonlyField
            //       label={'Área de pesquisa: '}
            //       value={`${document.researchArea.slice(0, 100)}...`}
            //     />
            //   </CardContent>
            //   <CardActions className={'flex justify-end'}>
            //     <DocumentDownload
            //       id={
            //         document.file.split('/')[
            //           document.file.split('/').length - 1
            //         ]
            //       }
            //     />
            //   </CardActions>
            // </Card>
          ))}

        {props.loading &&
          Array.from({ length: 4 }).map((arr, idx) => (
            <Card sx={{ maxWidth: 345 }} key={idx} className={'w-80'}>
              <CardContent>
                <div className={'flex justify-between'}>
                  <Skeleton variant="rectangular" width={70} height={70} />
                  <div>
                    <Skeleton
                      variant="rectangular"
                      width={140}
                      height={10}
                      className={'mb-2'}
                    />
                    <Skeleton variant="rectangular" width={140} height={10} />
                  </div>
                </div>
                <Skeleton
                  variant="rectangular"
                  width={240}
                  height={40}
                  className={'my-4'}
                />
              </CardContent>
              <CardActions className={'flex justify-end'}>
                <Skeleton
                  variant="rectangular"
                  width={80}
                  height={20}
                  className={'my-4'}
                />
              </CardActions>
            </Card>
          ))}
      </section>
    </article>
  );
}
