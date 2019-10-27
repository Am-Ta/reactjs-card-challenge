import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { selectCard } from "./../action/CardAction";

const BtnRandGen = ({ cardRes: { current }, selectCard }) => {
    // Handle the click for generate random card
    const handleClick = () => {
        !current && selectCard();
    };

    return (
        <div className='btn-box'>
            <button className='btn btn_primary' onClick={handleClick}>
                Random Generate Card <i className='fas fa-random'></i>
            </button>
        </div>
    );
};

BtnRandGen.propTypes = {
    cardRes: PropTypes.shape({ current: PropTypes.object }),
    selectCard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    { selectCard }
)(BtnRandGen);
