import React, { useState, useEffect } from "react";

const CardEdit = ({ current: { title, description }, updateCard }) => {
    const [card, setCard] = useState({ title: "", description: "" });

    // Load the current title and description of card on the form state
    useEffect(() => {
        setCard({ title, description });
    }, []);

    // Handle the changes on the title and description of card
    const handleChange = e => {
        setCard({ ...card, [e.target.name]: e.target.value });
    };

    // HandleSubmit
    const handleSubmit = e => {
        e.preventDefault();

        updateCard(card.title, card.description);
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__item'>
                <label className='form__label'>Title</label>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={card.title}
                    className='form__input'
                />
            </div>

            <div className='form__item'>
                <label className='form__label'>Description</label>
                <textarea
                    type='text'
                    name='description'
                    onChange={handleChange}
                    value={card.description}
                    className='form__input'
                ></textarea>
            </div>

            <div className='form__item'>
                <button type='submit' className='btn btn_block btn_success'>
                    <i className='fas fa-check'></i> Update
                </button>
            </div>
        </form>
    );
};

export default CardEdit;
