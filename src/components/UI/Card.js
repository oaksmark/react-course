import React from 'react';

import './Card.css';
//Este componete é responsável pelo formato básico do app
//Os quais terão em comum o formato de "Cards"
function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;