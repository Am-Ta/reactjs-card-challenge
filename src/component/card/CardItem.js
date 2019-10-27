import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrent } from "../../action/CardAction";

const CardItem = ({ cardRes: { card }, setCurrent }) => {
    // Select icon relative than the card tag
    const getIcon = () => {
        switch (card.tag) {
            case "sport":
                return <i className='fas fa-running'></i>;
            case "art":
                return <i className='fas fa-guitar'></i>;
            case "fun":
                return <i className='far fa-smile'></i>;
        }
    };

    // To update the card
    const handleClick = () => {
        setCurrent(card);
    };

    return (
        // The code to equal is 1. so the animation is runing
        <div className={card.code === 1 ? "card card_show" : "card"}>
            {/* The code to equal is 0. so the image is load */}
            {card.code === 0 && (
                <div className='card__img-box'>
                    <img
                        src={card.image}
                        alt='Card Image'
                        className='card__img'
                    />
                </div>
            )}

            {/* The code to equal is 2. so the audio is play */}
            {card.code === 2 && (
                <div className='card__audio-box'>
                    <audio src={card.sound} currenttime='true' autoPlay></audio>
                </div>
            )}

            <div className='card__info'>
                <h3 className={`card__title card_${card.tag}`}>
                    {getIcon()}
                    {card.title}
                </h3>
                <p className='card__desc'>{card.description}</p>
            </div>

            <div className='card__btn'>
                <button className='btn btn_dark' onClick={handleClick}>
                    <i className='fas fa-pencil-alt'></i> Edit
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    { setCurrent }
)(CardItem);
