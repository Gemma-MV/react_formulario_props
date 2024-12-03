import './App.css';
import './components/StyleComponents.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';
import PruebaHook from './components/PruebaHook';

function App() {
  return (
    <>
    <Header />
    <div>
      <Formulario/>
      <div>
        <PruebaHook/>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;