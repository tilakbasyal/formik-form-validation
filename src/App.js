import React, { Component } from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sign Up Form: </h1>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", password: "", conPass: "" }}
          validate={values => {
            let errors = {};
            if (!values.firstName) {
              errors.firstName = "First Name  is compulsory.";
            } else if (!values.lastName) {
              errors.lastName = "Last Name is compulsory.";
            } else if (!values.email) {
              errors.email = "Email is Compulsory.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.email)
            ) {
              errors.email = "Invalid Email Address";
            } else if (values.password.length < 8) {
              errors.password = "Password must be greater than 8 characters."
            }            
            else if (values.password !== values.conPass) {
              errors.conPass = "Passwords donot match.";
            }
            return errors;
          }}

          handleSubmit={values => {
            alert(JSON.stringify(values, null, 2));            
          }}

        >

          {() => (
            <Form>
              <div className="input-blocks" >
                <div className="block">
                  <label>FirstName: </label>
                  <Field type="text" name="firstName" placeholder="Enter your first name" />
                  <ErrorMessage name="firstName" component="div" />
                </div>

                <div className="block">
                  <label>LastName: </label>
                  <Field type="text" name="lastName" placeholder="Enter your last name" />
                  <ErrorMessage name="lastName" component="div" />
                </div>

                <div className="block">
                  <label>Email: </label>
                  <Field type="email" name="email" placeholder="Enter your E-mail Address" />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div className="block">
                  <label>Password: </label>
                  <Field type="password" name="password" placeholder="Enter your password" />
                  <ErrorMessage name="password" component="div" />
                </div>

                <div className="block">
                  <label>Confirm Password: </label>
                  <Field type="password" name="conPass" placeholder="Enter your password again" />
                  <ErrorMessage name="conPass" component="div" />
                </div>
              </div>

              <div className="buttons">
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
                <button type="reset">Reset</button>
              </div>

            </Form>
          )}

        </Formik>
      </div>
    );
  }
}

export default App;
