import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((good) => {
        window.localStorage.setItem("token", good.data.payload);
        // console.log(good.data.payload)
        // console.log(this.state.credentials)
        this.props.history.push("/protected");
      })
      .catch((bad) => {
        console.log("error: ", bad);
      });
  };

  render() {
    return (
      <div>

        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="name"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default Login;
