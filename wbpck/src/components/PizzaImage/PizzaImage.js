import React from 'react';

import classes from './PizzaImage.css';
import pizza from '../../assets/pizza.jpg';

const pizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={pizza} className={classes.PizzaImg} />
        </div>
    )
}

export default pizzaImage;