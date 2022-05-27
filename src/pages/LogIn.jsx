import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import quetzaleft from "../images/others/q-head-left.png"
import quetzalright from "../images/others/q-head.png"
import snake from "../images/others/snake.png"
import { Heading, Text, Input, Button } from "@chakra-ui/react"

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
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
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.FEED);
    });
  }

  return (
<div className="matrixSign">
        <div>
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
                    <Heading>Mah xiyolpaquican ini mosentiliztli</Heading>
                  </div> 
                  <div>
                    <Heading size='xs'>(Que disfruten esta visita, en Nahuatl)</Heading>
                  </div> 
              </div>
              <div>
                  <img className="qhead" src={quetzalright} alt="quetzal-head"></img>
              </div>
          </div>
          </div>
        </div>
        <div> 
            <form onSubmit={handleFormSubmission} className="auth__form2">
            <Heading className="inputSign" size='md' htmlFor="Input-username">Nombre de Usuario</Heading>
            <Input
              id="Input-username"
              type="text"
              name="username"
              placeholder="Espero que no se te haya olvidado"
              value={username}
              onChange={handleInputChange}
              required
            />

            <Heading className="inputSign" size='md' htmlFor="Input-password">Password</Heading>
            <Input
              id="Input-password"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={handleInputChange}
              required
              minLength="8"
            />

            {error && (
              <div className="error-block">
                <p>There was an error submiting the form:</p>
                <p>{error.message}</p>
              </div>
            )}

            <Button colorScheme="green" className="button__submit" type="submit">
              Ingresar
            </Button>
          </form>
            



        </div>
</div>




  
  );
}

