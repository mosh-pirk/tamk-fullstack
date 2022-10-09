const WeatherIcon = ({code}) => {

    return<div>
        <img src={`http://openweathermap.org/img/wn/${code}@2x.png`} alt={code}/>
    </div>
}

export default WeatherIcon