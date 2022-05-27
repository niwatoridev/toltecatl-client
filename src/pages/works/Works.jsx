import React, { Fragment, useEffect, useState } from "react";
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Heading, Image, Text } from '@chakra-ui/react'
import "./Works.css"
import CardPortfolio from "../../components/CardPortfolio/CardPortfolio";
import heartOut from "../../images/icons/hearthOut.png"
import heart from "../../images/icons/heart.png"
import filmIcon from "../../images/icons/film.png"
import musicIcon from "../../images/icons/music.png"
import pinturaIcon from "../../images/icons/paint-board-and-brush.png"
import fotoIcon from "../../images/icons/camera.png"
import digitalIcon from "../../images/icons/drawing-tablet.png"

const WorksPage = (props) => {

  const [ works, setWorks ] = useState([])





let linkFetch = `${process.env.REACT_APP_SERVER_URL}/portfolio/` + props.user._id

useEffect(() => {
  fetch(linkFetch, {
  method: "GET",
  mode:'cors',
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


  
  // let link = works.workSource;
  // let indice = link?.indexOf("=");
  // let extraccion = link?.substring(indice + 1);
  // let linkFinal = "https://www.youtube.com/embed/" + extraccion


  // console.log("este es el works:", works)
  // console.log("este es el link:", link)
  // console.log("este es el indice:", indice)
  // console.log("este es el extraccion:", extraccion)
  // console.log("este es el link final:", linkFinal)

  return (
    <div className="portafolioMatrix">
      <div>
        <Heading size='4xl'>Portafolio</Heading>
        <Heading size='md'>{props.user.name} {props.user.lastName}</Heading>
      </div>
      <div className="portfolioGrid">
      {
        works.map(work => {
         let linkFinal = work?.workSource?.split("=")[1]
          return <Fragment>  
  {(work.artType === 'Cortometraje') && 
              <div className="portfolioCard"> 
                <div className="parte1PostPort"> 
                    <div className="parte1PostCortometraje">
                        <div>
                          <iframe width="350" height="200" src={`https://www.youtube.com/embed/${linkFinal}`} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                  </div>
                    <div className="parte2PostCortometraje">
                        <div className="divisionIzq">  
                            <img className="artIconPort" src={filmIcon} alt="film-icon"/>
                            <Text className="textoPortafolio" fontSize='sm' noOfLines={1}>{work.title}</Text>                      
                        </div>
                        <div className="likeDiv">
                            {work.likes}
                            <img className="icon" src={heart} alt="heart-icon"/>
                        </div> 
                    </div>
              </div>
               
  }
  {(work.artType === 'Cancion') && 
                <div className="portfolioCard"> 
                  <div className="parte1PostPort">
                      <div className="parte1PostCortometraje">
                        <div>
                          <iframe width="350" height="200" src={`https://www.youtube.com/embed/${linkFinal}`} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                  </div>
                    <div className="parte2PostCortometraje">
                        <div className="divisionIzq">
                           <img className="artIconPort" src={musicIcon} alt="music-icon"/>
                           <Text className="textoPortafolio" fontSize='sm' noOfLines={1}>{work.title}</Text>                                
                        </div>
                       <div className="likeDiv">
                        {work.likes}
                        <img className="icon" src={heart} alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
  }  
                        
  {( work.artType === 'Pintura') &&  
  <div className="portfolioCard"> 
                  <div className="parte1PostPort">
                      <div className="parte1PostCortometraje">
                        <div>
                        <img className="fotoPortfolio" src={work.workSource} alt="img-work"/>
                        </div>
                    </div>
                  </div>
                    <div className="parte2PostCortometraje">
                        <div className="divisionIzq">
                           <img className="artIconPort" src={pinturaIcon} alt="pintura-icon"/>
                           <Text className="textoPortafolio" fontSize='sm' noOfLines={1}>{work.title}</Text>                                
                        </div>
                       <div className="likeDiv">
                        {work.likes}
                        <img className="icon" src={heart} alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
    }
  {( work.artType === 'Fotografia') &&  
  <div className="portfolioCard"> 
                  <div className="parte1PostPort">
                      <div className="parte1PostCortometraje">
                        <div>
                        <img className="fotoPortfolio" src={work.workSource} alt="img-work"/>
                        </div>
                    </div>
                  </div>
                    <div className="parte2PostCortometraje">
                        <div className="divisionIzq">
                           <img className="artIconPort" src={fotoIcon} alt="foto-icon"/>
                           <Text className="textoPortafolio" fontSize='sm' noOfLines={1}>{work.title}</Text>                                
                        </div>
                       <div className="likeDiv">
                        {work.likes}
                        <img className="icon" src={heart} alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
    }
    {( work.artType === 'Ilustracion Digital') &&  
    <div className="portfolioCard"> 
                  <div className="parte1PostPort">
                      <div className="parte1PostCortometraje">
                        <div>
                        <img className="fotoPortfolio" src={work.workSource} alt="img-work"/>
                        </div>
                    </div>
                  </div>
                    <div className="parte2PostCortometraje">
                        <div className="divisionIzq">
                           <img className="artIconPort" src={digitalIcon} alt="digital-icon"/>
                           <Text className="textoPortafolio" fontSize='sm' noOfLines={1}>{work.title}</Text>                                
                        </div>
                       <div className="likeDiv">
                        {work.likes}
                        <img className="icon" src={heart} alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
    }
      
</Fragment>
        })
      }
      </div>
    </div>
  );
};

export default WorksPage;
