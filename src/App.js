import React, { useState, useEffect } from "react";
import BtnRandGen from "./component/BtnRandGen";
import CardBox from "./component/card/CardBox";
import "./App.scss";

const App = () => {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);
    const [current, setCurrent] = useState(null);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        setCards([
            {
                code: 1,
                title: "Exercise",
                description: "Exercise on a regular basis.",
                tag: "sport"
            },
            {
                code: 0,
                title: "Painting",
                description: "Look at this beautiful painting",
                image: "http://static.pushe.co/challenge/sky.jpg",
                tag: "art"
            },
            {
                code: 2,
                title: "Let's have fun",
                description: "Listen to the music",
                sound: "http://static.pushe.co/challenge/sound.mp3",
                tag: "fun"
            },
            {
                code: 1,
                title: "Hey!",
                description: "Have you called your parents lately!",
                tag: "fun"
            },
            {
                code: 0,
                title: "Sports",
                description: "Have you ever played one of theses sports?",
                image: "http://static.pushe.co/challenge/sport.jpg",
                tag: "sport"
            }
        ]);
    }, []);

    // Select random card
    const selectRandomCard = () => {
        if (!current) {
            let randomNum = Math.random();
            randomNum = Math.round(randomNum * (cards.length - 1));
            console.log(randomNum);
            setIndex(randomNum);
            setCard(cards[randomNum]);
        }
    };

    // Update the card
    const updateCard = (title, description) => {
        // Create New card for update
        const newCard = {
            ...card,
            title,
            description
        };
        // Set New card for Update
        setCards(
            cards.map((card, i) => {
                return i === index ? newCard : card;
            })
        );
        setCard(newCard);

        // Set states to the default value
        setCurrent(null);
    };

    return (
        <div className='container'>
            <BtnRandGen selectRandomCard={selectRandomCard} />
            {card && (
                <CardBox
                    card={card}
                    current={current}
                    setCurrent={setCurrent}
                    updateCard={updateCard}
                />
            )}
        </div>
    );
};

export default App;

/* Fetch Cards */
// const fetchCards = async () => {
//     const res = await fetch("http://static.pushe.co/challenge/json");
//     const data = await res.json();
//     setCards(data.cards);
// };
