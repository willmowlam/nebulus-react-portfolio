import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {Home, Projects, Contact} from './components/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

function App() {
  return (
    <>      
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
