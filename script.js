const link = 'http://api.weatherstack.com/current?access_key=d305dc688fd65e428eef0e4abf296ef6'
const root = document.getElementById('root')

let store = {
    city: "London", feelslike: 0,
    cloudcover: 0,
    temperature: 0,
    humidity: 0,
    observationTime: "00:00 AM",
    pressure: 0,
    uvIndex: 0,
    visibility: 0,
    isDay: "yes",
    description: 0,
}

const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`)
    const data = await result.json()

    const { current: {
        humidity,
        feelslike,
        cloudcover,
        temperature,
        observation_time: observationTime,
        pressure,
        uv_index: uvIndex,
        visibility,
        is_day: isDay,
        weather_descriptions: description,
        wind_speed: windSpeed,
    } } = data

    store = {
        ...store,
        isDay,
        pressure,
        uvIndex,
        feelslike,
        cloudcover,
        temperature,
        humidity,
        observationTime,
        visibility,
        windSpeed,
        description: description[0],
    }

    renderComponent()
}

const renderComponent = () => {
    root.innerHTML = `${store.temperature}°`
}

fetchData()
