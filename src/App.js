import './App.css';
import './components/StyleComponents.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <div>
      <Formulario/>
    </div>
    <Footer />
    </>
  );
}

export default App;