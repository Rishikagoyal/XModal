import React, { useState,useRef, useEffect } from 'react';
import './App.css';


const Form=()=>{

  const[phone,setPhone]=useState('');
  const[dob,setDOB]=useState('');
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const formRef =useRef(null);
  const buttonRef=useRef(null);
  const[formOpen,setFormOpen]=useState(false);

  const handleClickOutside=(event)=>{
    if(formRef.current && !formRef.current.contains(event.target) && !buttonRef.current.contains(event.target))
    {
      setFormOpen(false);
    }

  }

  const checkPhone=()=>{
    if(phone.length<10 || phone.length>10)
    {
      alert("Invalid phone Number.Please enter a 10-digit valid phone number");
      return true;
    }

    return false;
  }

  const checkDOB=()=>{
    const DOB = new Date(dob);
    const today= new Date();
    
    if(DOB>=today)
    {
      alert("Invalid date of birth.Date of birth cannot be in the future.")

      return true;
    }

    return false;
  }

  const getName=()=>{
    if(name.length()>0)
    {
      return true;
      
    }

    return false;
  }

  const handleSubmit=(e)=>{

    const getPhone=checkPhone(); 
    const getDOB=checkDOB();
    e.preventDefault();

    setPhone('');
    setDOB('');
    setName('');
    setEmail('');
    //setFormOpen(true);
    
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  },[])
  
  return(
    <>
      <h1>User Details Modal</h1>
      <button onClick={()=>{setFormOpen(true)}} className="formOpen" ref={buttonRef}>Open Form</button>

      {formOpen?(  <div className="modal">

                      <div className="modal-content">
                        <h1>Fill Details</h1>

                        <form onSubmit={handleSubmit} ref={formRef}>
                        <label>Username:</label><br></br>
                        <input type="text" id="username" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                        <br></br>

                          <label>Email Address:</label><br></br>
                          <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                          <br></br>

                          <label>Phone Number:</label><br></br>
                          <input type="tel" value={phone} onChange={(e)=>{setPhone(e.target.value)}}  id="phone" required/>
                          <br></br>

                          <label>Date of Birth:</label><br></br>
                          <input type="date" value={dob} onChange={(e)=>{setDOB(e.target.value)}}  id="dob" required/>
                          <br></br>

                        <button type="submit" className="submit-button" >Submit</button>

                        </form>


                      </div>

                </div>
):(<></>)}
    </>
    
  )
}

export default Form;
