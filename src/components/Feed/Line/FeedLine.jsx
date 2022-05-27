import React from "react";
import { Link } from "react-router-dom";
import "./FeedLine.css";
import FeedPost from "../Post/FeedPost";
import { Button } from "@chakra-ui/react";

const FeedLine = (props) => {
  
  return (
    <div className="feedLine">
        <FeedPost {...props}/>
        <FeedPost {...props}/>
        <FeedPost {...props}/>
        <FeedPost {...props}/>
        <FeedPost {...props}/>
    </div>
  );
};

export default FeedLine;

