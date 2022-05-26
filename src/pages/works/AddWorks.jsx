import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import "./AddWork.css";

const WorksPage = (props) => {
  
  const artist = props.user?._id
  const likes = 0
  const [ title, setTitle ] = useState("")
  const [ artType, setArtType ] = useState("Fotografia")
  const [ caption, setCaption ] = useState("")
  const [ duration, setDuration ] = useState("")
  const [ workSource, setWorkSource ] = useState("")
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
      <label>Leyenda:  </label>
      <input onChange={handlerCaptionChange} type="text" placeholder="Leyenda"/>
  </div>
  : artType === "Ilustracion Digital" ? 
  <div>
      <label>Leyenda:  </label>
      <input onChange={handlerCaptionChange} type="text" placeholder="Leyenda"/>
  </div>
  : artType === "Pintura" ? 
  <div>
      <label>Leyenda:  </label>
      <input onChange={handlerCaptionChange} type="text" placeholder="Leyenda"/>
  </div>
  : artType === "Cortometraje" ? 
  <div>
      <label>Duracion:  </label>
      <input onChange={handlerDurationChange} type="number"/>
      <label>  minutos</label><br></br>
      <label>Genero: </label>
      <select onChange={handlerGenreChange}>
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
        </select>
  </div>
  : artType === "Cancion" ?
  <div>
      <label>Duracion:  </label>
      <input onChange={handlerDurationChange} type="number"/>
      <label>  minutos</label><br></br>
      <label>Genero:  </label>
      <input onChange={handlerGenreChange} type="text" placeholder="¿Que genero es?"/>
  </div>
  : <div></div>
  )}


  function previewAddWork() {

    return (

    artType === "Fotografia" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Leyenda:</h3>
          <p>{caption}</p>
      </div>
    : artType === "Ilustracion Digital" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Leyenda:</h3>
          <p>{caption}</p>
      </div>
    : artType === "Pintura" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Leyenda:</h3>
          <p>{caption}</p>
      </div>
    : artType === "Cortometraje" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Duracion:</h3>
          <p>{duration} mins</p>
          <h3>Genero:</h3>
          <p>{genre}</p>
      </div>
    : artType === "Cancion" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Duracion:</h3>
          <p>{duration} mins</p>
          <h3>Genero:</h3>
          <p>{genre}</p>
      </div>
    : artType === "Libro" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Genero:</h3>
          <p>{genre}</p>
          <h3>Paginas:</h3>
          <p>{pages}</p>
      </div>
    : artType === "Poema" ?
      <div>
          <h3>Titulo:</h3>
          <p>{title}</p>
          <h3>Tipo:</h3>
          <p>{artType}</p>
          <h3>Cuerpo</h3>
          <p>{body}</p>
          
      </div>

    : <div></div>
    )
}
  
  const onSubmit = e => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/works`, {
      method: "POST",
      mode:'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        artType,
        workSource,
        likes,
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
    <div>
        <div className="addWorkMain">
            <form onSubmit={onSubmit}>
            <div className="addWorkForm">
              <h2>Añade una obra a tu Portafolio</h2>
                <label>Titulo:      
                <input 
                    onChange={handlerTitleChange}
                    type="text"
                    placeholder="Titulo de tu Obra"
                />
                </label>
                <label>Tipo:   
                <select  onChange={handlerArtTypeChange}>
                    <option value="Fotografia">Fotografia</option>
                    <option value="Ilustracion Digital">Ilustracion Digital</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Cortometraje">Cortometraje</option>  
                    <option value="Cancion">Musica</option>  
                   
                   </select>
                 </label>
                 <input 
                    onChange={handlerWorkSourceChange}
                    type="text"
                    placeholder="Source"
                />
                 {typeOfArtDisplay()}
                <button type="submit">Agregar</button>
            </div>
            </form>
            <div className="previewAddWork">
                <div>
                  <h2>Vista previa de tu creación</h2>
                </div>
                <div className="framePreview">
                  {previewAddWork()}
                  <div className="framePreviewChildTwo">
                  <img className="imgAddWorkPreview" src={workSource} alt="img-user"/>  
                  </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default WorksPage;


// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.