import React from 'react'
import './styles.css'
import ClipLoader from 'react-spinners/ClipLoader'

export default function  Spinner() {
  return (
    <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
      <ClipLoader color="#black" size={100}/>
    </div>
  );
};

/* export default function Spinner () {
  return <div className="lds-ring"> <div></div><div></div><div></div><div></div> <BarLoader> </BarLoader> </> </div>
  
}*/