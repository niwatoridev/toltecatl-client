import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedLine from "../../components/Feed/Line/FeedLine";
import FeedButtons from "../../components/Feed/Buttons/FeedButtons";
import "./feed.css"
import { Button } from "@chakra-ui/react"

const FeedPage = (props) => {

const [ reload, setReload ] = useState(<FeedLine {...props}/>)

function reloadFeed() {
  setReload(<FeedLine {...props}/>)
}

  return (
  <div className="FeedMatrix">
      <div>
        <FeedLine {...props}/>
        <Button className="cargarMas" onClick={reloadFeed}>Cargar Mas</Button>
      </div>
  </div>
  );
};

export default FeedPage;