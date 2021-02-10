import {useState} from 'react'
import Dropdown from "./components/Dropdown/Dropdown";
import {
  Switch,
  Route
} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import LandingPage from './pages/LandingPage';
import Homes from './pages/Homes';
import About from './pages/About';
import Rentals from './pages/Rentals';
import Footer from './components/Footer/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar isOpen= {isOpen} toggle={toggle}/>
      <Dropdown isOpen= {isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component = {LandingPage}/>
        <Route path="/homes" component = {Homes}/>
        <Route path="/about" component = {About}/>
        <Route path="/rentals" component = {Rentals}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
