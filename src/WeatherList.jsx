import WeatherCard from './WeatherCard';

function WeatherList({weathers, locations}){
    return(
        <div className="post_list">
            {weathers.map((weather, index) => {
                console.log(index)
                return (
                    <div key={index}>
                      <WeatherCard weather={weather} location={locations[index]}/>
                    </div>
                  );
                })}
        </div>
    )
}

export default WeatherList;