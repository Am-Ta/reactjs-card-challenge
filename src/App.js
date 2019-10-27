import React, { useState, useEffect } from "react";
import BtnRandGen from "./component/BtnRandGen";
import CardBox from "./component/card/CardBox";
import "./App.scss";

import { connect } from "react-redux";
import { fetchCards } from "./action/CardAction";

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

const mapStateToProps = state => ({
    cardRes: state.cardRes
});

export default connect(
    mapStateToProps,
    { fetchCards }
)(App);
