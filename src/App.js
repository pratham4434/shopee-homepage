import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Blog />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;
