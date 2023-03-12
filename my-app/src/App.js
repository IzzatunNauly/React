import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarJs from './components/NavbarJs';
import { useState } from 'react';

const App = () => {
   const cliked = () => {
      return alert("Button dipencet");
   }

   const paragraf = () => {
    return(
      <div>
        <h3>Mantap Banget</h3>
        <i>Semangat 45</i>
        <marquee>Bismillah</marquee>
      </div>
    )
   }

   const [getNavbarValue, setNavbarValue] = useState("");
   const changeNavbarValue = () => {
    setNavbarValue('My Contact');
   }

  return (
    <div className="App">
      <header className="App-header">
        {/* <NavbarJs /> */}
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Izzatun Nauly
        </p>
        {/* {getNavbarValue}
        <button onClick={() => changeNavbarValue()}>Ubah Navbar</button> */}
        <MyButton cliked={cliked} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
}

export default App;