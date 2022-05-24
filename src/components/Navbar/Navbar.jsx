import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import logo from "../../images/logo-3.png"

const Navbar = (props) => {
  return (
    <nav>
    
        <div>

        </div>
        <div>
        <Link to={PATHS.HOMEPAGE}><img className="logoNav" src={logo} alt="logo"></img>
        </Link>
        </div>
            <div className="nav__authLinks">
              {props.user ? (
                <>
                  {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
                    Protected Page
                  </Link> */}
                  <Link to={PATHS.WORKS} className="workLink">
                    Tu Perfil
                  </Link>
                  <button className="nav-logoutbtn" onClick={props.handleLogout}>
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to={PATHS.SIGNUPPAGE} className="authLink">
                    Crear Cuenta
                  </Link>
                  <button className="nav-logoutbtn"><Link to={PATHS.LOGINPAGE} className="authLink">
                    Iniciar Sesión
                  </Link></button>
                </>
              )}
            </div>
     
    </nav>
  );
};

export default Navbar;
