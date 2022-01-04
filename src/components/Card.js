import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <>
        <h1>Result:</h1>
        <div className={styles.container}>
        <h1 className={styles.name}>City: {props.city} </h1>
        <p>Country: {props.country}</p>
        <p>Temp: {props.temp} °C</p>
        <p>Description: {props.description}</p>
        </div>
        </>
    );
};

export default Card;