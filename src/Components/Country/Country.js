import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, flag, region } = props.country;
    const handleAddCountry = props.handleAddCountry;

    return (
        <div className="country-card">
            <h3>{name}</h3>
            <img className="flag-image" src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>{region}</small></p>
            <button className="country-btn" onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;