import React from "react";
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

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    {}
)(CardBox);
