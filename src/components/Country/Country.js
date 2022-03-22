import React from 'react';
import './Country.css';
const Country = (props) => {
    const {area,name,region,population,flags} = props.country;
    return (
        <div className='country bg-transparent shadow-lg rounded'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h5>Area: {area}</h5>
            <p><small>Region: {region}</small></p>
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country;