import Teksti from "./Teksti";
import {useEffect, useState} from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

const Weather = ({capital}) => {
    const title = `Weather in ${capital.toLocaleString()} `
    const APIKey = process.env.REACT_APP_API_KEY
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='
    const weatherAPI = `${weatherURL}${capital},uk&APPID=${APIKey}`

    const [weatherData, setWeatherData] = useState(undefined)
    useEffect(() => {
        axios.get(weatherAPI).then(data => {
            setWeatherData(data.data)
        }).catch(err => console.error(err))
    }, [capital, weatherAPI, weatherData])

    const fahreToCel = () => Math.trunc((weatherData?.main.temp - 32) * 0.5556)


    return (
        <div>
            <Teksti text={title} tyyppi={'bold'}/>
            <Teksti text={`temperature ${fahreToCel()} Celsius`} tyyppi={'newLine'}/>
            {
                weatherData?.weather
                    .map((data, i) => <WeatherIcon key={data.icon + i} code={data.icon}/>)
            }
            <Teksti text={`wind ${weatherData?.wind.speed} m/s`} tyyppi={'newLine'}/>
        </div>
    )

}

export default Weather