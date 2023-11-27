import './App.css';
import Navbar from './componentes/Navbar';
import About from './componentes/About';
import Services from './componentes/Services';
import Equip from './componentes/Equip';
import Clientes from './componentes/Clientes';
import Portifolio from './componentes/Portifolio';

import WorkUs from './componentes/WorkUs';
import Contact from './componentes/Contact';

import TemplateBanner from './componentes/imgs/TemplateBanner.jpeg'

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <img src={TemplateBanner} alt="Banner da Pagina Inicial" />
      </div>
      <About />
      <Services />
      <Equip />
      <Clientes />
      <Portifolio />

      <div className="for-sale">
        <p>Desconto para pequenas empresas de</p>
        <h2>ATÉ 80% OFF</h2>
        <button>Cadastre-se</button>
      </div>
      <WorkUs />
      <Contact />
      <footer>
        <p>info@mysite.com</p>
        <p>©2023 por ÁRTEMIS. Orgulhosamente criado com Wix.com</p>
      </footer>
    </div>
  );
}

export default App;
