import React from "react";
import PropTypes from "prop-types";

import CardItem from "./CardItem";
import CardEdit from "./CardEdit";

import { connect } from "react-redux";

const CardBox = ({ cardRes: { current } }) => {
    return (
        <div className='card-box'>
            {!current && <CardItem />}
            {current && <CardEdit />}
        </div>
    );
};

CardBox.propTypes = {
    cardRes: PropTypes.shape({ current: PropTypes.object })
};

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    {}
)(CardBox);
