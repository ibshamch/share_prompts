import React from "react";
import "./card.styles.css";
const Card = ({ HandleCardDeletion, card }) => {
  const { id, text } = card;
  return (
    <div className="prompt-card">
      <span
        className="material-symbols-outlined delete-btn"
        onClick={() => HandleCardDeletion(id)}
      >
        delete
      </span>
      <textarea className="card-text">{text}</textarea>
    </div>
  );
};

export default Card;
