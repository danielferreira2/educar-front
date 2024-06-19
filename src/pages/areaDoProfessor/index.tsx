import { Container, Paper, Tooltip } from '@mui/material';
import * as React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDialog } from '../../hooks/useDialog';
import { CreateDocumentDialog } from './createDocumentDialog';

export function AreaDoProfessor() {
  const { open, close, isOpen } = useDialog();
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <React.Fragment>
      <Container maxWidth={'lg'}>
        <h2 className={'my-4 text-8xl text-gray-800 font-medium text-center'}>
          Área do Professor
        </h2>
        <section className={'grid grid-cols-3 gap-4 my-8'}>
          <Tooltip title={'Clique para abrir o formulário'}>
            <button type={'button'} onClick={open}>
              <Paper
                elevation={4}
                className={
                  'bg-educar-primary px-10 py-8 rounded-full cursor-pointer hover:bg-opacity-95'
                }
              >
                <div className={'flex justify-between items-center'}>
                  <h3 className={'text-4xl text-white'}>Cadastrar Documento</h3>
                  <AddOutlinedIcon className={'text-white text-5xl'} />
                </div>
              </Paper>
            </button>
          </Tooltip>
        </section>
      </Container>
      <CreateDocumentDialog isOpen={isOpen} onClose={close} />
    </React.Fragment>
  );
}
