import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Acerca de mi</span> <br />
        <p>
          Estudiante de 𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗼 𝘄𝗲𝗯 𝗳𝘂𝗹𝗹 𝘀𝘁𝗮𝗰𝗸 en CoderHouse.
          buscando empleo en el ámbito del Desarrollo frontend no sólo para aplicar los conocimientos adquiridos, sino también para continuar desarrollándome y crecer tanto personal como profesionalmente en el mundo laboral. Me encantan los desafíos y estoy siempre en constante movimiento, buscando adquirir nuevos conocimientos para cumplir con éxito mis objetivos.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
