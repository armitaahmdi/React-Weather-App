import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [apiData, setApiData] = useState({});
    const [getLocation, setGetLocation] = useState('Tehran');
    const [location, setLocation] = useState('Tehran');

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0a74a553b430af7a54c4b853f35ff1e3&units=metric`
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => console.log(res))
            .then((data) => setApiData(data));
    }, [apiUrl])

    // const submitHandler = () => {
    //     setLocation(location)
    // }

    const submitHandler = () => {
        setLocation(getLocation);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input type='search'
                // value={location}
                // onChange={event => setLocation(event.target.value)}
                value={getLocation}
                onChange={event => setGetLocation(event.target.value)}
            />
            <button onClick={submitHandler}>Search</button>

            <h1>Result:</h1>
            
        </div>
    );
};

export default Weather;