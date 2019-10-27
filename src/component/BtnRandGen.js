import React from "react";

const BtnRandGen = ({ selectRandomCard }) => {
    // Handle the click for generate random card
    const handleClick = () => selectRandomCard();

    return (
        <div className='btn-box'>
            <button className='btn btn_primary' onClick={handleClick}>
                Random Generate Card <i className='fas fa-random'></i>
            </button>
        </div>
    );
};

export default BtnRandGen;
