import React, { useEffect } from "react";

const CardItem = ({ card, setCurrent }) => {
    // useEffect(() => {
    //     const audio = new Audio(card.sound);
    //     if (card.code !== 2) {
    //         audio.pause();
    //         audio.currentTime = 0;
    //     }
    //     audio.play();
    // }, [card]);

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

    // update the card
    const handleClick = () => {
        setCurrent(card);
    };

    return (
        // The code to equal is 1
        <div className={card.code === 1 ? "card card_show" : "card"}>
            {/* The code to equal is 0 */}
            {card.code === 0 && (
                <div className='card__img-box'>
                    <img
                        src={card.image}
                        alt='Card Image'
                        className='card__img'
                    />
                </div>
            )}
            {/* The code to equal is 2 */}
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

            {/* Btn For Edit */}
            <div className='card__btn'>
                <button className='btn btn_dark' onClick={handleClick}>
                    <i className='fas fa-pencil-alt'></i> Edit
                </button>
            </div>
        </div>
    );
};

export default CardItem;
