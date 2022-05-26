import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeedPost.css";
import {Heading, AspectRatio } from "@chakra-ui/react"
import heartOut from "../../../images/icons/hearthOut.png"
import heart from "../../../images/icons/heart.png"


function getIndexOfWorks(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

const EmbedPost = (props) => { 
  
    const [ works, setWorks ] = useState([])
  
      useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/feed`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }})
        .then(response => response.json())
        .then(setWorks)
        .catch(console.log)  
      },
      []
      )


  const indexObtenido = getIndexOfWorks(0, works.length)
  let link = works[indexObtenido]?.workSource;
  let indice = link?.indexOf("=");
  let extraccion = link?.substring(indice + 1);
  let linkFinal = "https://www.youtube.com/embed/" + extraccion

return (
    <div className="FeedPostCortometraje"> 
                  <div className="parte1PostCortometraje">
                      <div>
                        
                          <iframe width="852" height="480" src={linkFinal} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      
                      </div>
                  </div>
                  <div className="parte2PostCortometraje">
                      <div className="izquierdaCortometraje">
                          <Heading>{works[indexObtenido]?.title}</Heading>
                      </div>
                      <div className="derechaCortometraje">
                          <img className="heartOut" src={heartOut} alt="heart-icon"/>  
                      </div>
                  </div>
                </div>
)

};

export default EmbedPost;