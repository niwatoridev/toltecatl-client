import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import logo from "../../images/logo-3.png"
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import glass from "../../images/icons/glass.png"

const Navbar = (props) => {
  return (
    <nav>
        <div className="logoInNav">
        <Link to={PATHS.HOMEPAGE}><img className="logoNav" src={logo} alt="logo"></img>
        </Link>
        <Link to={PATHS.FEED} className="ObrasFeed">
                    Explorar Obras
                  </Link>
        </div>
        <div>
          <Stack spacing={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
              />
              
          <Input pointerEvents="InputLeftElement" focusBorderColor='#b42f24' backgroundColor='#f7e7da' _hover='black' placeholder='Buscar' size='md' variant='filled' htmlSize={50} width='auto'></Input>
            </InputGroup>
        </Stack>
        </div>
            <div className="nav__authLinks">
              {props.user ? (
                <>
                  {/* <Link to={PATHS.PROTECTEDPAGE} className="authLink">
                    Protected Page
                  </Link> */}
                  <Link {...props} to={PATHS.PORTFOLIO} className="workLink">
                    Tu Portafolio
                  </Link>
                  <Link to={PATHS.ADDWORK} className="workLink">
                    Añadir Obra
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
                  <button className="nav-logoutbtn"><Link to={PATHS.LOGINPAGE} className="authLinkBtn">
                    Iniciar Sesión
                  </Link></button>
                </>
              )}
            </div>
     
    </nav>
  );
};

export default Navbar;
