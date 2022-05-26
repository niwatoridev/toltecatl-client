import React from "react";
import { Link } from "react-router-dom";
import FeedLine from "../../components/Feed/Line/FeedLine";
import FeedButtons from "../../components/Feed/Buttons/FeedButtons";
import "./feed.css"

const FeedPage = (props) => {
  return (
  <div className="FeedMatrix">
      <div>
        <FeedLine {...props}/>
      </div>
  </div>
  );
};

export default FeedPage;