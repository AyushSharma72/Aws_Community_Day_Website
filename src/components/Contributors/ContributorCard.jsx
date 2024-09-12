import React from "react";
import "./Contributor.css";

function ContributorCard(props) {
  return (
    <>
      <div class="Contributor_card">
        <img src={props.image} alt="Profile image" />
        <div class="card__content">
          <p class="card__title">{props.name}</p>

          <a href={props.linkedin} target="_blank">
            <i className="fa-brands fa-linkedin text-blue-700 text-3xl pl-14"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContributorCard;
