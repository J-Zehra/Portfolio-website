import { Home } from './Pages/Home/Home'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'

function App() {
  return (
      <div className="container">
        <div className="top"></div>
        <Header/>
        <Nav/>
        <Home/>
      </div>
  );
}

export default App;
