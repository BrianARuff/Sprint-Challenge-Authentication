import React, { Component } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: null
  }
  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleOnClick = () => {
    axios.post('http://localhost:9000/api/login', {username: this.state.username, password: this.state.password})
      .then(resp => {
        console.log(resp.data);
        Cookies.set('token', resp.data.token);
        this.props.history.push("/jokes");
      })
  }
  render() {
    return (
      <div>
        <div>
          <h2>Login</h2>
          <div>
            <label htmlFor="">Username: </label>
            <input type="text" placeholder="username" name="username" onChange={this.handleOnChange}/>
          </div>
          <div>
            <label htmlFor="">Password: </label>
            <input type="password" placeholder="password" name="password" onChange={this.handleOnChange}/>
          </div>
          <div>
            <button onClick={this.handleOnClick}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;