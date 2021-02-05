import {useState} from 'react'
import Dropdown from "./components/Dropdown/Dropdown";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./globalStyles";

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
      <Hero isOpen= {isOpen} toggle={toggle}/>
    </>
  );
}

export default App;
