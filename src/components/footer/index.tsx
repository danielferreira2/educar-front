import * as React from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import UenfLogo from '../../assets/images/uenfLogo.webp';

export function Footer() {
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <footer
      className={
        'mt-8 bg-educar-primary p-8 rounded-tl-2xl rounded-br-2xl  lg:rounded-tl-curveFooter lg:rounded-br-curveFooter'
      }
    >
      <section className="flex justify-evenly flex-wrap gap-4">
        <figure>
          <img src={UenfLogo} alt="Logo UENF" />
        </figure>
        <address className="text-white text-lg flex flex-col justify-between">
          <div className={'flex mt-4'}>
            <EmailIcon />
            <a href="mailto:uenf@uenf.br" className={'ml-4'}>
              uenf@uenf.br
            </a>
          </div>
          <div className={'flex mt-4'}>
            <CallIcon />
            <p className={'ml-4'}>(22) 2739-7119 - Gerência de Comunicação</p>
          </div>
          <div className={'flex mt-4'}>
            <AddLocationAltIcon />
            <p className={'ml-4'}>
              Av. Alberto Lamego, 2000 - Parque Califórnia Campos dos Goytacazes
              - RJ CEP: 28013-602
            </p>
          </div>
        </address>
      </section>
      <section className="flex justify-center mt-8">
        <h3 className="text-lg text-white">
          Todos os direitos reservados a UENF
        </h3>
      </section>
    </footer>
  );
}
