import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Izzatun Nauly
        </p>
        <MyButton cliked={cliked} />
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
}

export default App;