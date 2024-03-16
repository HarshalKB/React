import React, {useState} from "react";
import "../styles/login.css";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = [
    {username: "Harshal", password: "pass1234"},
    {username: "Sumit", password: "pass5678"},
  ];
  const admin = {username: "admin", password: "admin"};

  function handleClick(e) {
    e.preventDefault();
    if (props.page == "Employee") {
      let loggedIn = false;
      users.forEach((user) => {
        if (user.username == username && user.password == password) {
          loggedIn = true;
        }
      });
      if (!loggedIn) {
        document.querySelector(".message").innerHTML =
          "Wrong credentials. Please try again.";
        setTimeout(() => {
          document.querySelector(".message").innerHTML = "";
          setUsername("");
          setPassword("");
        }, 3000);
      } else {
        document.querySelector(
          ".message"
        ).innerHTML = `Login Successful. Welcome ${username}.`;
        setTimeout(() => {
          document.querySelector(".message").innerHTML = "";
          setUsername("");
          setPassword("");
          navigate("/employee/userform");
        }, 3000);
      }
    } else {
      let loggedIn = admin.username == username && admin.password == password;
      if (!loggedIn) {
        document.querySelector(".message").innerHTML =
          "Wrong credentials. Please try again.";
        setTimeout(() => {
          document.querySelector(".message").innerHTML = "";
          setUsername("");
          setPassword("");
        }, 3000);
      } else {
        document.querySelector(
          ".message"
        ).innerHTML = `Login Successful. Welcome ${username}.`;
        setTimeout(() => {
          document.querySelector(".message").innerHTML = "";
          setUsername("");
          setPassword("");
          navigate("/admin/adminpanel");
        }, 3000);
      }
    }
  }

  return (
    <div className="form">
      <h2>{props.page} Login</h2>
      <form>
        <div className="username">
          <label htmlFor="userid">Enter your username : </label> <br />
          <input
            type="text"
            id="userid"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Enter your password : </label> <br />
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
        <p className="message"></p>
      </form>
    </div>
  );
};

export default Login;
