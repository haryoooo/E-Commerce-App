import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./LoginComponent.css";
import { url } from "../urlConfig";
import { setAuth } from "../store/action/LoginAction";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function login(e) {
    e.preventDefault();

    axios
      .post(`${url}/login`, {email,password})
      .then((res) => {
        console.log(res)
        // localStorage.setItem("access_token", res.data.accessToken);
        // dispatch(setAuth(true));
        // setEmail("");
        // setPassword("");
        // history.push("/");
      })

      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="LoginForm">
      <h3>Login Page</h3>
      <form onSubmit={login}>
        <TextField
          variant="outlined"
          value={email}
          label="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          value={password}
          label="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
