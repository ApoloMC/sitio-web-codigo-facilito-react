import './App.css';
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu';
import Personajes from './components/Personajes';
import Episodios from './components/Episodios';
import Citas from './components/Citas';

function App() {
  const currentURL = window.location.pathname;
  function renderContent () {
    switch(currentURL) {
      case "/":
        return <Home />
      case "/personajes":
        return <Personajes/>
      case "/citas":
        return <Citas/>
      case "/episodios":
        return <Episodios/>
      default:
        return <Home/>
    }
  }

  return (
    <div className="App">
      <Menu />
      {
        renderContent()
      }
    </div>
  );
}

export default App;
