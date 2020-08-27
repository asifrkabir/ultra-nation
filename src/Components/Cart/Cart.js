import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation += country.population;
    // }

    const totalPopulation = cart.reduce( (totalPopulation, country) => totalPopulation + country.population , 0);

    return (
        <div>
            <h2>Number of countries: {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;