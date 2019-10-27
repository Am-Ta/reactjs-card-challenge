import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateCard } from "../../action/CardAction";

const CardEdit = ({ cardRes: { current }, updateCard }) => {
    const { title, description } = current;
    const [form, setForm] = useState({ title: "", description: "" });

    // Load the current title and description of card for the form state
    useEffect(() => {
        setForm({ title, description });
    }, []);

    // Handle the changes on the title and description of the card
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle the submit for new card
    const handleSubmit = e => {
        e.preventDefault();

        updateCard(form.title, form.description);
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__item'>
                <label className='form__label'>Title</label>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={form.title}
                    className='form__input'
                />
            </div>

            <div className='form__item'>
                <label className='form__label'>Description</label>
                <textarea
                    type='text'
                    name='description'
                    onChange={handleChange}
                    value={form.description}
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

CardEdit.propTypes = {
    cardRes: PropTypes.shape({ current: PropTypes.object }),
    updateCard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    { updateCard }
)(CardEdit);
