import React from 'react';
import Navigation from './component/navigation/navigation'
import Logo from './component/logo/logo'
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Logo/>
     {/* <ImageLinkForm/>
     <FaceRecognition/> */}
    </div>
  );
}

export default App;
