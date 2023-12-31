import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Why from './Components/Why';

function App() {
  return (
    <div className='bg-black p-10'>
      <Navbar/>
      <Hero/>
      <About/>
      <Why/>
      <Footer/>
    </div>
  );
}

export default App;
