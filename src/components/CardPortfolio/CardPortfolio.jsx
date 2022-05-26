import React, { Fragment, useEffect, useState } from "react";
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Heading } from '@chakra-ui/react'


const CardPortfolio = (props) => {

const [ worksArr, setWorksArr ] = useState([])


let linkFetch = 'http://localhost:5005/api/portfolio/' + props.user._id


useEffect(() => {
  fetch(linkFetch, {
  method: "GET",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }})
  .then(response => response.json())
  .then(setWorksArr)
  .catch(console.log)  
},
[]
)

return (
    <div className="portafolioMatrix">
      <div>
        <Heading size='lg'>Hola</Heading>
      </div>
      <div className="portafolioGrid">
        <h2>Hola</h2>
      </div>
    </div>
  );


};

export default CardPortfolio;