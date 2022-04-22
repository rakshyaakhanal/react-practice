import React, { useState } from "react";
import "./Incdec.css";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Incdec = () => {

  const [cdata, udata] = useState(0);
  const Inc = () => {
    udata(cdata + 1 );
  };
  const Dec = () => {
    if(cdata > 0){
      udata(cdata-1);
    }
   else {
     alert("Cannot be less than zero");
   }
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1> {cdata} </h1>
          <div className="btn-div">
            <Button onClick= {Inc}><AddIcon /></Button>
            <Button onClick= {Dec}><DeleteIcon /></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incdec;