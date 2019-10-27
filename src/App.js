import React, { useEffect } from "react";
import PropTypes from "prop-types";

import BtnRandGen from "./component/BtnRandGen";
import CardBox from "./component/card/CardBox";

import { connect } from "react-redux";
import { fetchCards } from "./action/CardAction";

import "./App.scss";

const App = ({ cardRes: { card }, fetchCards }) => {
    // Fetch the cards
    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className='container'>
            <BtnRandGen />
            {card && <CardBox />}
        </div>
    );
};

App.propTypes = {
    cardRes: PropTypes.shape({ card: PropTypes.object }),
    fetchCards: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    { fetchCards }
)(App);
