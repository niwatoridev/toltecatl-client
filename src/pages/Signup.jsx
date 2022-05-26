import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    lastName: "",
    email: ""
  });
  const { username, password, name, lastName, email } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
      name,
      lastName,
      email
    };
  
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <h1>Registrate</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
      <label htmlFor="input-name">Nombre</label>
        <input
          id="input-name"
          type="text"
          name="name"
          placeholder="Tu Nombre"
          value={name}
          onChange={handleInputChange}
          required
        /> 
        
        <label htmlFor="input-name">Apellido</label>
        <input
          id="input-lastName"
          type="text"
          name="lastName"
          placeholder="Tu Apellido"
          value={lastName}
          onChange={handleInputChange}
          required
        />           
        
        <label htmlFor="input-username">Usuario</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Usuario Deseado"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Contraseña</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Contraseña Deseada"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        <label htmlFor="input-name">Email</label>
                <input
                  id="input-email"
                  type="text"
                  name="email"
                  placeholder="Tu Email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />     

        

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
