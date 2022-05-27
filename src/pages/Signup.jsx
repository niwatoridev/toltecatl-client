import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import { Heading, Text, Input, Button } from "@chakra-ui/react"
import quetzaleft from "../images/others/q-head-left.png"
import quetzalright from "../images/others/q-head.png"
import snake from "../images/others/snake.png"


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
      <div className="matrixSign">
          <div>
              <img className="qhead2" src={snake} alt="quetzal-head"></img>
          </div>
          <div className="tituloSign">
              <div>
                  <img className="qhead" src={quetzaleft} alt="quetzal-head"></img>
              </div>
              <div className="divisorNahua">
                  <div>
                    <Heading>Mah cualli xihualacan</Heading>
                  </div> 
                  <div>
                    <Heading size='xs'>(Bienvenido, en Nahuatl)</Heading>
                  </div> 
              </div>
              <div>
                  <img className="qhead" src={quetzalright} alt="quetzal-head"></img>
              </div>
          </div>
      <form onSubmit={handleFormSubmission} className="auth__form">
      <Heading size='md'  htmlFor="Input-name">Nombre</Heading>
        <Input
          id="Input-name"
          type="text"
          name="name"
          placeholder="¿Como te llamas?"
          value={name}
          onChange={handleInputChange}
          required
        /> 
        
        <Heading size='md' className="inputSign" htmlFor="Input-name">Apellido</Heading>
        <Input
          id="Input-lastName"
          type="text"
          name="lastName"
          placeholder="¿Y tu apellido?"
          value={lastName}
          onChange={handleInputChange}
          required
        />           
        
        <Heading size='md' className="inputSign" htmlFor="Input-username">Usuario</Heading>
        <Input
          id="Input-username"
          type="text"
          name="username"
          placeholder="Servira para Iniciar Sesion"
          value={username}
          onChange={handleInputChange}
          required
        />

        <Heading size='md' className="inputSign" htmlFor="Input-password">Contraseña</Heading>
        <Input
          id="Input-password"
          type="password"
          name="password"
          placeholder="Contraseña Deseada"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        <Heading size='md' className="inputSign" htmlFor="Input-name">Email</Heading>
                <Input
                  id="Input-email"
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

        <Button colorScheme='green' className="button__submit" type="submit">
          Crear Cuenta
        </Button>
      </form>
    </div>
  );
}
