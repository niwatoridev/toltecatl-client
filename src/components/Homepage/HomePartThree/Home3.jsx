import React from "react";
import { Link } from "react-router-dom";
import "./Home3.css"
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";
import aztec from "../../../images/others/aztec.png"

const Home3 = (props) => {
  return (
    <div className="main3">
        {/* <div>
          <Heading>Que es Toltecatl?</Heading>
        </div> */}
        <div className="divider">
            <div className="dividerChild2">
                <Text className="text" fontSize='2xl'>Toltecatl es la primera plataforma hecha por mexicanos para mexicanos enfocada en impulsar las carreras artísticas de sus usuarios, promoviendo su trabajo en la plataforma y dándole herramientas a los autores como un portafolio digital, contacto con posibles compradores de comisiones y mucho más.</Text>
            </div>
            <div className="dividerChild1">
                <Image
                  boxSize='600px'
                  src={aztec}
                  alt='Quetzalcoatl-Draw'
                />
            </div>
        </div>
    </div>
  );
};

export default Home3;

