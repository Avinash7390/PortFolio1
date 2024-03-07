import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./cards.css";

const Card = ({ title, image, content, githubLink }) => {
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate("/projects");
  };
  return (
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">{title}</h2>
      </div>
      <div class="card-body">
        <img src={image} className="homeImg" />
        <p style={{ marginBottom: "10px" }}>{content}</p>
        <div>
          <button onClick={handleProjectClick} className="projectBtn">
            View Project
          </button>
          <NavLink to={githubLink} target="_blank" className={"gLink"}>
            Source Code
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
