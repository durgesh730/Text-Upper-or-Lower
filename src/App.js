import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Textform heading="Enter Your Text" />
        <Footer/>
      </div>
    </>
  );
}

export default App;
