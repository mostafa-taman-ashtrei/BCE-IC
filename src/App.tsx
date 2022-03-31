import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar';
import Router from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
