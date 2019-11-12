import React from "react";
import "./FaceRecognition.scss";
import Tilt from 'react-tilt'
import './bounding-box.scss'
const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='center ma'>
        <div className="absolute mt2">
            
    <img src={imageUrl} id='inputImage' alt='' width='500px' height='auto' />
   <div className="bounding-box" style={{
       top: box.topRow,
       right: box.rightCol,
       bottom: box.bottomRow,
       left: box.leftCol }}></div>
    </div>
    </div>
  );
};
export default FaceRecognition;
