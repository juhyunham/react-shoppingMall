import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Container from './components/Container/Container'
import Data from './data';

function App() {

  let [ shoes, setShoes ] = useState(Data);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Container shoes={shoes} />
    </div>  
  );
}

export default App;
