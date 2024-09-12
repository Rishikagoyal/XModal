import React,{useState,useEffect} from 'react';
import Form from './Form';
import './App.css';


const Modal=()=>{

  const[openForm,setOpenForm]=useState(false);
  return(

    <>
    <h1>User Details Modal</h1>
      <button onClick={(e)=>{setOpenForm(!openForm)}} className="formOpen">Open Form</button>

      {openForm?(<>
      <Form/>
      
      </>):(<></>)}

      
    
    </>

    
  )
}

export default Modal;