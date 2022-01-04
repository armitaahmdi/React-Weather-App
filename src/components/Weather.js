// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import styles from './Weather.module.css'

const Weather = () => {

    const [apiData, setApiData] = useState();
    const [getLocation, setGetLocation] = useState('');
    const [location, setLocation] = useState();
    const [error, setError] = useState(false);

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0a74a553b430af7a54c4b853f35ff1e3&units=metric`

    useEffect(() => {
        if (location !== undefined) {
            axios.get(apiUrl)
                .then(res => {
                    setApiData(res.data)
                    setError(false)
                })
                .catch(e => setError(true))
        }

    }, [apiUrl, location])

    const submitHandler = () => {
        setLocation(getLocation);
    };

    return (
        <div className={styles.container}>
            <h1>Weather App</h1>
            <input type='search'
                placeholder='Search for a city'
                value={getLocation}
                onChange={event => setGetLocation(event.target.value)}
            />
            <button onClick={submitHandler}>Search</button>
            {error && <p>Please enter a valid city</p>}

            {apiData && !error && <Card city={apiData.name}
                country={apiData.sys.country}
                temp={Math.round(apiData.main.temp)}
                description={apiData.weather[0]['description']}
            />
            }
        </div>
    );
};

export default Weather;