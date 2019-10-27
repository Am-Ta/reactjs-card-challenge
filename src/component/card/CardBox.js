import React from "react";
import CardItem from "./CardItem";
import CardEdit from "./CardEdit";

const CardBox = ({ card, current, setCurrent, updateCard }) => {
    return (
        <div className='card-box'>
            {!current && <CardItem card={card} setCurrent={setCurrent} />}
            {current && <CardEdit current={current} updateCard={updateCard} />}
        </div>
    );
};

export default CardBox;
