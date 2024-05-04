
function WeatherCard({weather, location}){
    //const {title , body} = weather;
    console.log(weather)
    console.log(location)
    const weather_code = weather.current.weather_code
    const datetime = new Date(weather.current.time);
    const time = datetime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    


    return(
        <>
        <div>
            <h2>{location['name']}</h2>
            <p>{time}</p>
            <p>{weather_code}</p>
        </div>
        </>
    )
}

export default WeatherCard;