import React from "react";
import { Link } from "react-router-dom";
import quetzal from "../../../images/others/quetzal.png"
import "./Home2.css"
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import snake from "../../../images/others/snake.png"

const Home2 = (props) => {
  return (
    <div className="main2">
        {/* <div>
          <Heading>Que es Toltecatl?</Heading>
        </div> */}
        <div className="divider">
            <div className="dividerChild1">
                <Image
                  borderRadius='full'
                  boxSize='700px'
                  src={quetzal}
                  alt='Quetzalcoatl-Draw'
                />
            </div>
            <div className="dividerChild2">
                <img src={snake} alt='snake-draw' className='snakeImg'/>
                <Text className="text" fontSize='3xl'>Toltecatl es la primer plataforma hecha por mexicanos para mexicanos enfocada en impulsar las carreras artísticas de sus usuarios, contribuyendo a la difusión y apreciación de su obra mediante la promoción de su trabajo en la plataforma, haciendo accesibles herramientas a los autores, tales como un portafolio digital, y poniéndoles en contacto con posibles compradores de comisiones y mucho mas.</Text>
            </div>
        </div>
    </div>
  );
};

export default Home2;

