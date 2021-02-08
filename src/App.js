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
      </Switch>
    </>
  );
}

export default App;
