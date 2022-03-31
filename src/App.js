import { Home } from './Pages/Home/Home'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { About } from './Pages/About/About';
import { Projects } from './Pages/Projects/Projects'
import { Footer } from './components/Footer/Footer'
import { Contact } from './Pages/Contact/Contact'

function App() {
  return (
      <div className="container">
        <div className="top"></div>
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
