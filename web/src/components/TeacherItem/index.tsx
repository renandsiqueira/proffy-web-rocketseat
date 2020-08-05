import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/4096376?s=460&u=612872b23b076f3ea4a397cb8ef27bb6107bf3b3&v=4" alt="Renan Siqueira"/>
        <div>
          <strong>Renan Siqueira</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus viverra dapibus. Ut mollis orci aliquet libero efficitur malesuada. Donec condimentum, mauris vitae interdum commodo, ante metus luctus magna, ut rhoncus justo elit eu enim. Morbi orci elit, aliquet quis mi non, pharetra lobortis erat. Quisque ultrices molestie elit. Aenean eu posuere sem. Nulla sagittis, orci mattis feugiat vestibulum, neque mi vehicula erat, at posuere massa ante sagittis nisi. Cras sit amet turpis a erat cursus pellentesque. Nullam in lorem sit amet nulla venenatis dignissim. Nulla facilisi. Nam sit amet lorem ut urna euismod finibus. Maecenas a purus urna.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>    
  );
}

export default TeacherItem;