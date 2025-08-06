import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Home, Projects, Contact, ContactSuccess, Custom404 } from './components/Pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/*" element={<Custom404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
