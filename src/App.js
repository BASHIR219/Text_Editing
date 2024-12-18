
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('white');

  const toggleMode = () => {
    if (mode === 'white') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="mb-3">
        

              <TextForm heading="Enter the text :" mode={mode} />

           
      </div>


      {/* <About mode={mode}/> */}
    </>
  );
}

export default App;
