import React from "react";

interface Card {
  id: number;
  name: string;
  email: string;
}
const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div>
      <h1>{card.name}</h1>
      <h1>{card.email}</h1>
    </div>
  );
};

export default CardComponent;
