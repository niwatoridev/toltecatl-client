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
                <Heading size='4xl' className="text" >Toltecatl</Heading>
                <Heading size='md' className="text" >Del Nahuatl</Heading>
                <Text className="text" fontSize='2xl'>1. (sust.) Maestro de algún arte</Text>
                <Text className="text" fontSize='2xl'>2. (sust.) Edificador de edificios, el oficial</Text>
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

