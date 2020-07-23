
import React from 'react'
import logo from './form-photo.jpg';
import '../App.css'

function User({ values }) {
  
  if (!values) {
    return <h3>No Info available</h3>
  }

  return (
    <div className='user-container'>
      <img id="avatar" src={values.avatar || logo}/>
      <h2>Name:{values.first_name} {values.last_name}</h2>
      <p>Email: {values.email}</p>
      <p>Password: {values.password}</p>
    
      
    </div>
  )
}

export default User