import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import formSchema from './validation/formSchema'
import axios from 'axios'
import User from './components/User'
import * as yup from 'yup'

const initialFormData ={
 
name : '',
email: "",
password:'',
  terms: true

}
const initialFormErrors = {
  username: '',
  email: '',
  password:'',
 
}



function App() {
const [user, setUser] = useState([]);
const [originalFormValues, setFormValues] = useState(initialFormData);
const [formErrors, setErrors]=useState(initialFormErrors);
const [disabled, setDisabledStatus]=useState(true);

const getUser = () => {

  axios.get('https://reqres.in/api/users')
    .then(res => {
      
     setUser(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
}

const postUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
      
        setUser([res.data, ...user])
        setFormValues(initialFormData)
      })
      .catch(err => {
        console.log(err)
      })
  }

const changeOnInput = (name, value) =>{
  yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...formErrors,
          [name]: "",
        })
      })
      
      .catch(err => {
        setErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

  setFormValues({
    ...originalFormValues,
    [name]:value
  })

}
const changeOnCheck = (name, isChecked) => {
  setFormValues({
    ...originalFormValues,

      [name]: isChecked
    
  })
}

const onSubmit = () => {

const newUser = {
  name: originalFormValues.name.trim(),
  email: originalFormValues.email.trim(),
  password: originalFormValues.password.trim(),
  //terms: Object.keys(originalFormValues.terms).filter(term => originalFormValues.terms[term]),
  terms: originalFormValues.terms,
}
postUser(newUser);
}

useEffect(() => {
  getUser()
}, [])

useEffect(() => {
  formSchema.isValid(originalFormValues).then(valid => {
    setDisabledStatus(!valid)
  })
}, [originalFormValues])

  return (
    <div className="App">
      <header className="App-header">
        <Form 
        changeOnInput={changeOnInput}
         changeOnCheck={changeOnCheck} 
         value={originalFormValues}
          submit={onSubmit}
           errors={formErrors} 
           disabled={disabled} />
      
      </header>
      {
        user.map(user=> {
          return (
            <User key={user.id} values={user} />
          )
        })
      }
    </div>
  );
}

export default App;
