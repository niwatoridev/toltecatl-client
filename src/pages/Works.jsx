import React from "react";
import * as PATHS from "../utils/paths";
import { Link } from "react-router-dom";

const WorksPage = () => {
  return (
    <div>
      <div>
        <h1>Tus Obras</h1>
      </div>
      <div>
        <button><Link to={PATHS.ADDWORK}>
              Añadir una Obra
            </Link></button>
      </div>
    </div>
  );
};

export default WorksPage;
