import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { Redirect } from 'react-router-dom';

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    redirect: null
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    axios
      .post("http://localhost:5000/api/users/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      })
      .then((result) => {
        console.log(result, "result");
        console.log('New user saved to database');
        this.setState({redirect: '/articles'});
        this.props.handleLogin();
      })
      .catch((err) => {
        console.log("err in sending data from axios to db: ", err.response);
      });
  }
  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <div className='SignUp-page__div'>
          <label htmlFor='email' className='SignUp-page__label'>
            name
          </label>

          <input
            name='name'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />

          <label htmlFor='email' className='SignUp-page__label'>
            Email
          </label>

          <input
            name='email'
            type='email'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />

          <label htmlFor='password' className='SignUp-page__label'>
            Password
          </label>
          <input
            name='password'
            type='password'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />

          <label htmlFor='password2' className='SignUp-page__label'>
            Confirm Password
          </label>
          <input
            name='password2'
            type="password"
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />
          <button className="SignUp-page__button"

            onClick={this.submit.bind(this)}
          >

            Sign up

          </button>
        </div>
      </div>
    );
  }
}
