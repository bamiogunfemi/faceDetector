import React from "react";
import Tilt from 'react-tilt'
import './logo.scss'

const Logo = () => {
  return (
   <div className="ma4 mt0">
       <Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 120, width: 125 }} >
 <div className="Tilt-inner"><img className= 'pa4' alt='logo' src="https://img.icons8.com/nolan/64/000000/saw-blade.png"/> </div>
</Tilt>
   </div>
  );
}
export default Logo;
