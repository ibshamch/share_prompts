import React from "react";
import Card from "../Card/card.component";
import "./cardlist.styles.css";
const CardList = ({ cardList, HandleCardDeletion }) => {
  return (
    <section className="prompt-card-list">
      {cardList.map((card) => {
        return (
          <Card
            key={card.id}
            HandleCardDeletion={HandleCardDeletion}
            card={card}
          />
        );
      })}
    </section>
  );
};

export default CardList;
