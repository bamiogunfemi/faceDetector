import React from "react";
import Tilt from 'react-tilt'
import './logo.scss'

const Logo = () => {
  return (
   <div className="ma4 mt0">
       <Tilt className="Tilt br2 shadow-2" options={{ max : 20 }} style={{ height: 100, width: 250 }} >
 <div className="Tilt-inner"> <span role='img' aria-label='emoji'>👽</span> </div>
</Tilt>
   </div>
  );
}
export default Logo;
