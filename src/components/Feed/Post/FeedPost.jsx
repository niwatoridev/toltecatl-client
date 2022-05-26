import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeedPost.css";
import {Heading, AspectRatio } from "@chakra-ui/react"
import heartOut from "../../../images/icons/hearthOut.png"
import heart from "../../../images/icons/heart.png"
import filmIcon from "../../../images/icons/film.png"
import musicIcon from "../../../images/icons/music.png"
import pinturaIcon from "../../../images/icons/paint-board-and-brush.png"
import fotoIcon from "../../../images/icons/camera.png"
import digitalIcon from "../../../images/icons/drawing-tablet.png"
import Like from "./Like"

function getIndexOfWorks(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

const FeedPost = (props) => { 
  


  const [ works, setWorks ] = useState([])

    useEffect(() => {
      fetch('http://localhost:5005/api/feed', {
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
    
    
    // const indexObtenido = 3
  
  //Obtener Codigo de Video de Youtube
  const indexObtenido = getIndexOfWorks(0, works.length)
  let link = works[indexObtenido]?.workSource;
  let indice = link?.indexOf("=");
  let extraccion = link?.substring(indice + 1);
  let linkFinal = "https://www.youtube.com/embed/" + extraccion
 
  let workInd = works[indexObtenido]?.artType;
    
  return (
  <Fragment>  
  {(workInd === 'Cortometraje') && 
                <div className="FeedPost"> 
                    <div className="parte1PostCortometraje">
                        <div>
                          <iframe width="852" height="480" src={linkFinal} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={filmIcon} alt="film-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{works[indexObtenido]?.title}</Heading>
                                <Heading size='lg'>{works[indexObtenido]?.artist.name} {works[indexObtenido]?.artist.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <Like {...props}/>   
                        </div>
                    </div>
                </div>
  }
  {(workInd === 'Cancion') && 
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                          <iframe width="852" height="480" src={linkFinal} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={musicIcon} alt="music-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{works[indexObtenido]?.title}</Heading>
                                <Heading size='lg'>{works[indexObtenido]?.artist.name} {works[indexObtenido]?.artist.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <Like {...props}/> 
                        </div>
                    </div>
                </div>
  }  
  {( workInd === 'Pintura') &&  
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                        <img src={works[indexObtenido]?.workSource} alt="img-work" width="852" height="480"/>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={pinturaIcon} alt="paint-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{works[indexObtenido]?.title}</Heading>
                                <Heading size='lg'>{works[indexObtenido]?.artist.name} {works[indexObtenido]?.artist.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <Like {...props}/>  
                        </div>
                    </div>
                </div>
    }
  {( workInd === 'Fotografia') &&  
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                        <img src={works[indexObtenido]?.workSource} alt="img-work" width="852" height="480"/>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={fotoIcon} alt="foto-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{works[indexObtenido]?.title}</Heading>
                                <Heading size='lg'>{works[indexObtenido]?.artist.name} {works[indexObtenido]?.artist.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <Like {...props}/>
                        </div>
                    </div>
                </div>
    }
    {( workInd === 'Ilustracion Digital') &&  
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                        <img src={works[indexObtenido]?.workSource} alt="img-work" width="852" height="480"/>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={digitalIcon} alt="digital-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{works[indexObtenido]?.title}</Heading>
                                <Heading size='lg'>{works[indexObtenido]?.artist.name} {works[indexObtenido]?.artist.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <Like {...props}/> 
                        </div>
                    </div>
                </div>
    }
      
</Fragment>
    )
  };

export default FeedPost;

