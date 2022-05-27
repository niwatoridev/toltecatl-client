import React, { Fragment, useEffect, useState } from "react"
import heartOut from "../../../images/icons/hearthOut.png"
import heart from "../../../images/icons/heart.png"


const Like = (props) => {

const [ liked, setLiked] = useState(false)

console.log("estos son los props:", props)
console.log("esta likeado?", liked)

function addCount(e) {
  e.preventDefault()
  setLiked(!liked)
  console.log("si esta sirviendo", liked)
    fetch(`${process.env.REACT_APP_SERVER_URL}/like`, {
      method: "POST",
      mode:'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: props.user?._id
      })
    })
      .then(res => res.json())
      .catch(console.error)
  }


  return <Fragment>
  {(liked === true) &&  
    <img onClick={addCount} className="heartOut" src={heart} alt="heart-icon"/>  
  }
  {(liked === false) &&  
    <img onClick={addCount} className="heartOut" src={heartOut} alt="heart-icon"/>  
  }
    </Fragment>
    

}



export default Like;