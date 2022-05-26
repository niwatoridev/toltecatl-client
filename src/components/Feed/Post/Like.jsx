import React, { Fragment, useEffect, useState } from "react"
import heartOut from "../../../images/icons/hearthOut.png"
import heart from "../../../images/icons/heart.png"


const Like = (props) => {
// console.log("estos son los props:", props)

// function addCount() { (e) => {
// console.log("like", props.user._id)

// e.preventDefault();
//     fetch(`${process.env.REACT_APP_SERVER_URL}`/works', {
//       method: "POST",
//       mode:'cors',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         userid: props.user?._id
        
//       })
//     })
//       .then((res) => res.json())
//       .catch(console.error)
//   }

return (
    <img className="heartOut" src={heartOut} alt="heart-icon"/>  
    )

}

export default Like;