import React from 'react'
import '../App.css'

function Form (props) {
    console.log(props)
    const {
      changeOnInput,
       disabled,
        errors,
         submit,
          changeOnCheck,
           value } = props;

    const inputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        changeOnInput(name , value);
    }
    const checkBoxChange = e => {
        const name= e.target.name;
    const checked = e.target.checked;
    changeOnCheck(name,checked);
    }    

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-wrapper">
        <div className="form-header">
          <h1> Sign Up <br /> Form</h1>
        </div>
        <div className="form-content" >

          <label htmlFor="name"> Name <br /> </label>
          <input
            name='name'
            type='text'
            id='name'
            placeholder='Enter Name'
            value={value.name}
            onChange={inputChange} />

          <p>
            <label htmlFor="email">  Email <br /></label>
            <input
              name='email'
              type='text'
              placeholder='Enter Email'
              value={value.email}
              onChange={inputChange}
            />

          </p>

          <p>
            <label htmlFor="password"> Password <br /></label>

            <input
              name='password'
              type='text'
              placeholder='Enter Password'
              value={value.password}
              onChange={inputChange}
            />

          </p>
          <p>
            <label htmlFor="terms"> Terms 	&amp; Conditions  </label>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={value.terms === true}
              onChange={checkBoxChange} />

          </p>
          <p>
            <button disabled={disabled} >Submit</button>
          </p>

          <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
          </div>


        </div>
      </div>
    </form>

  )
}

export default Form;