import React, { Component }  from 'react';
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const initialValues = { ID: "",Name: "", email: "",Facilities: "Classroom",Rating: "1",Review: "", };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.ID) {
      errors.ID = "ID is required!";
    } else if (values.ID.length < 3) {
      errors.ID = "ID must be more than 3 characters";
    } else if (values.ID.length > 20) {
      errors.ID = "ID cannot exceed more than 20 characters";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.Name) {
      errors.Name = "Name is required!";
    } else if (values.Name.length < 3) {
      errors.Name = "Name must be more than 3 characters";
    } else if (values.Name.length > 20) {
      errors.Name = "Name cannot exceed more than 20 characters";
    }

    if (!values.Facilities) {
      errors.Facilities = "Facilities is required!";
    }
    if (!values.Rating) {
      errors.Rating = "Rating is required!";
    }
    if (!values.Review) {
      errors.Review = "Review is required!";
    } else if (values.Name.length > 150) {
      errors.Name = "Name cannot exceed more than 150 characters";
    }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">successfully Submitted
        <p>Your ID : {formValues.ID}</p>
        <p>Your Name : {formValues.Name}</p>
        <p>Your Email : {formValues.email}</p>
        <p>Facilities you choosed is : {formValues.Facilities}</p>
        <p>Rating : {formValues.Rating}</p>
        <p>Review : {formValues.Review}</p></div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <h4>-By Tanvi Radia (20CS067)</h4>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>ID</label>
            <input
              type="text"
              name="ID"
              placeholder="ID"
              value={formValues.ID}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.ID}</p>
          
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={formValues.Name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Name}</p>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          
          <div className="field">
            <label>Facilities</label>
            <select type="text"
                    name="Facilities"
                    placeholder="Facilities"
                    value={formValues.Facilities}
                    onChange={handleChange}>
                  <option value="Classrooms">Classrooms</option>
                  <option value="Labs">Labs</option>
                  <option value="Hostels">Hostels</option>
                  <option value="Sports ground">Sports ground</option>
            </select>
          </div>
          <p>{formErrors.Facilities}</p>

          <div className="field">
            <label>Rating</label>
            <select type="text"
                    name="Rating"
                    placeholder="Rating"
                    value={formValues.Rating}
                    onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
            </select>
          </div>
          <p>{formErrors.Rating}</p>
          
          <div className="field">
            <label>Review</label>
            <input
              type="text"
              name="Review"
              placeholder="Review"
              value={formValues.Review}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Review}</p>

          
          
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;