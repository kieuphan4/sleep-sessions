import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Create an Account</h1>
      <button>Sign up with Apple</button>
      <button>Sign up with Google</button>
      <button>Sign up with Facebook</button>
      <p>---OR---</p>
      <p>Fill out the form below:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            id="lastname" 
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          <input
            type="text"
            id="username"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
          />
          <h3>Birthday</h3>
          <input
            type="date"
            id="date"
          />
        </div>
        <input type="submit" value="Sign Up"></input>
      </form>
    </div>
  )
}

export default Signup