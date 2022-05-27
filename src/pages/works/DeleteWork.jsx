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
const navigate = useNavigate()


  const onSubmit = e => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/work/delete/${id}`, {
      method: "DELETE",
      mode:'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
            })
      .then((res) => {
        res.json("eliminado")
      })
      .then(res => {
        navigate(PATHS.PORTFOLIO)
      })
      .catch(console.error)
  }
  
  return (
        <div className="portafolioMatrix">
            <form onSubmit={onSubmit}>
            <Heading size='lg'>¿Seguro que quieres eliminar esta obra?</Heading>
            <Button className="formContent" type="submit">Si, eliminar obra.</Button>
            
            </form>
        </div>  
  );


};

export default EditWork;
