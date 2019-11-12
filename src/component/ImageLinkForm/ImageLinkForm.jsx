import React from "react";
import "./ImageLinkForm.scss";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className="f3">{" Click the button to Detect Faces!!"}</p>
      <div className='center'>
       <div className="center pa4 br3 shadow-2"><input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
        <button className="w-30 grow f4 link ph3 pv2 deib white bg-light bg-light-purple" onClick={onButtonSubmit}>Detect</button>
      </div>
      </div> 
    </div>
  );
};
export default ImageLinkForm;
