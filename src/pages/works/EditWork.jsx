import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { Link, useParams } from "react-router-dom";
import { Button, ButtonGroup, Heading, Image, Text, Input, Select } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import "./Works.css"
import CardPortfolio from "../../components/CardPortfolio/CardPortfolio";
import heartOut from "../../images/icons/hearthOut.png"
import heart from "../../images/icons/heart.png"
import filmIcon from "../../images/icons/film.png"
import musicIcon from "../../images/icons/music.png"
import pinturaIcon from "../../images/icons/paint-board-and-brush.png"
import fotoIcon from "../../images/icons/camera.png"
import digitalIcon from "../../images/icons/drawing-tablet.png"

const EditWork = (props) => {

const { id } = useParams()


  const artist = props.user?._id
  const likes = 0
  const [ title, setTitle ] = useState("Titulo de tu Obra")
  const [ artType, setArtType ] = useState("Fotografia")
  const [ caption, setCaption ] = useState("")
  const [ duration, setDuration ] = useState("")
  const [ workSource, setWorkSource ] = useState("../../images/others/quetzal.png")
  const [ genre, setGenre ] = useState("")
  const [ pages, setPages ] = useState("")
  const [ body, setBody ] = useState("")
  const navigate = useNavigate()

  function handlerTitleChange (event) {
    setTitle(event.target.value)
  }
  function handlerArtTypeChange (event) {
    setArtType(event.target.value)
  }
  function handlerCaptionChange (event) {
    setCaption(event.target.value)
  }
  function handlerDurationChange (event) {
    setDuration(event.target.value)
  }
  function handlerWorkSourceChange (event) {
    setWorkSource(event.target.value)
  }
  function handlerGenreChange (event) {
    setGenre(event.target.value)
  }
  function handlerPagesChange (event) {
    setPages(event.target.value)
  }
  function handlerBodyChange (event) {
    setBody(event.target.value)
  }

  
  function typeOfArtDisplay () {
  return(  
    artType === "Fotografia" ? 
  <div>
  <Heading  size='md'>Link de tu Fotografia: <Input 
                    onChange={handlerWorkSourceChange}
                    type="text"
                    className="formContent"
                      />
                </Heading>
      <Heading size='md'>Leyenda:  </Heading>
      <Input className="formContent" onChange={handlerCaptionChange} type="text" placeholder=" Cuentanos algo sobre tu obra"/>
  </div>
  : artType === "Ilustracion Digital" ? 
  <div>
  <Heading  size='md'>Link de tu Ilustracion: <Input 
                    onChange={handlerWorkSourceChange}
                    type="text"
                    className="formContent"
                      />
                </Heading>
      <Heading size='md'>Leyenda:  </Heading>
      <Input className="formContent" onChange={handlerCaptionChange} type="text" placeholder=" Cuentanos algo sobre tu obra"/>
  </div>
  : artType === "Pintura" ? 
  <div>
  <Heading  size='md'>Link de tu Pintura: <Input 
                    onChange={handlerWorkSourceChange}
                    type="text"
                    className="formContent"
                      />
                </Heading>
      <Heading size='md'>Leyenda:  </Heading>
      <Input className="formContent" onChange={handlerCaptionChange} type="text" placeholder=" Cuentanos algo sobre tu obra"/>
  </div>
  : artType === "Cortometraje" ? 
  <div>
  <Heading  size='md'>Link de Youtube: <Input 
                    onChange={handlerWorkSourceChange}
                    type="text"
                    className="formContent"
                      />
                </Heading>
      <Heading size='md'>Duracion:  </Heading>
      <Input className="formContent" placeholder="En Minutos, sin segundos." onChange={handlerDurationChange} type="number"/>
      <Heading size='md'>Genero: </Heading>
      <Select className="formContent" placeholder='Genero' onChange={handlerGenreChange}>
                        <option value="Accion">Accion</option>
                        <option value="Aventuras">Aventuras</option>
                        <option value="Ciencia Ficcion">Ciencia Ficcion</option>
                        <option value="Comedia">Comedia</option>  
                        <option value="Documental">Documental</option>  
                        <option value="Drama">Drama</option>  
                        <option value="Fantasia">Fantasia</option>  
                        <option value="Terror">Terror</option>  
                        <option value="Suspenso">Suspenso</option>  
                        <option value="Musical">Musical</option>  
                        <option value="Otro">Otro</option>  
        </Select>
  </div>
  : artType === "Cancion" ?
  <div>
  <Heading  size='md'>Link de Youtube: <Input 
                    onChange={handlerWorkSourceChange}
                    type="text"
                    className="formContent"
                      />
                </Heading>
      <Heading size='md'>Duracion:  </Heading>
      <Input className="formContent" placeholder="En Minutos, sin segundos."  onChange={handlerDurationChange} type="number"/>
      <Heading size='md'>Genero:  </Heading>
      <Input className="formContent" onChange={handlerGenreChange} type="text" placeholder=" ¿Como lo autodenominas?"/>
  </div>
  : <div></div>
  )}


  function previewAddWork() {

    return <Fragment>  
  {(artType === 'Cortometraje') && 
                <div className="FeedPost"> 
                    <div className="parte1PostCortometraje">
                        <div>
                          <iframe width="852" height="480" src={workSource} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={filmIcon} alt="film-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{title}</Heading>
                                <Heading size='lg'>{props.user.name}{props.user.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <img src={heart} className="heartOut" alt="heart-icon"/>   
                        </div>
                    </div>
                </div>
  }
  {(artType === 'Cancion') && 
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                          <iframe width="852" height="480" src={workSource} title="YouTube Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={musicIcon} alt="music-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{title}</Heading>
                                <Heading size='lg'>{props.user.name} {props.user.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <img src={heart} className="heartOut" alt="heart-icon"/>   
                        </div>
                    </div>
                </div>
  }  
  {( artType === 'Pintura') &&  
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                        <img src={workSource} alt="img-work" width="852" height="480"/>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={pinturaIcon} alt="paint-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{title}</Heading>
                                <Heading size='lg'>{props.user.name} {props.user.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <img src={heart} className="heartOut" alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
    }
  {( artType === 'Fotografia') &&  
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                        <img src={workSource} alt="img-work" width="852" height="480"/>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={fotoIcon} alt="foto-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{title}</Heading>
                                <Heading size='lg'>{props.user.name} {props.user.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <img src={heart} className="heartOut" alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
    }
    {( artType === 'Ilustracion Digital') &&  
                <div className="FeedPost"> 
                    <div className="parte1Post">
                        <div>
                        <img src={workSource} alt="img-work" width="852" height="480"/>
                        </div>
                    </div>
                    <div className="parte2PostCortometraje">
                        <div className="izquierdaCortometraje">
                          <div className="divisionIzq">  
                              <div>  
                                <img className="artIcon" src={digitalIcon} alt="digital-icon"/>
                              </div>
                              <div className="divisionIzqSegundoChild">  
                                <Heading>{title}</Heading>
                                <Heading size='lg'>{props.user.name} {props.user.lastName}</Heading>
                              </div>
                          </div>
                        </div>
                        <div className="derechaCortometraje">
                        <img src={heart} className="heartOut" alt="heart-icon"/>  
                        </div>
                    </div>
                </div>
    }
      
</Fragment>
}
  

  const onSubmit = e => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/work/edit/${id}`, {
      method: "PUT",
      mode:'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        artType,
        workSource,
        content: {
          caption,
          duration,
          pages,
          genre,
          body
        },
        userid: props.user?._id
      })
    })
      .then((res) => res.json())
      .then(res => {
        navigate(PATHS.PORTFOLIO)
      })
      .catch(console.error)
  }
  
  return (
        <div className="addWorkMain">
    <div>
            <form onSubmit={onSubmit}>
            <div className="addWorkForm">
              <Heading size='2xl'>Modifica tu Obra</Heading>
              <Heading className="headerForm" size='xs'>Tienes que rellenar todos los campos nuevamente</Heading>
                <Heading size='md'>Titulo:      
                <Input 
                    onChange={handlerTitleChange}
                    type="text"
                    className="formContent"
                    
                />
                </Heading>
                <Heading size='md'>Tipo:   
                <Select className="formContent" onChange={handlerArtTypeChange}>
                    <option value="Fotografia">Fotografia</option>
                    <option value="Ilustracion Digital">Ilustracion Digital</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Cortometraje">Cortometraje</option>  
                    <option value="Cancion">Musica</option>  
                   
                   </Select>
                 </Heading>
                 
                 {typeOfArtDisplay()}
                <Button className="formContent" type="submit">Modificar Obra</Button>
            </div>
            </form>
            <div className="previewAddWork">
                <div>
                  <Heading className="headerForm" size='xl'>Vista previa de tu Modificacion</Heading>
                </div>
                <div className="framePreview">
                  {previewAddWork()}
                </div>
            </div>

        </div>
    </div>
  );


};

export default EditWork;
