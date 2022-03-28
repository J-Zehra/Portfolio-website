import { Home } from './Pages/Home/Home'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { About } from './Pages/About/About';

function App() {
  return (
      <div className="container">
        <div className="top"></div>
        <Header/>
        <Home/>
        <About/>
      </div>
  );
}

export default App;
