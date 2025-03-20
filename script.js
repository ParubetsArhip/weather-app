const link = 'http://api.weatherstack.com/current?access_key=1306b684b49ba61c1f8d4615068e5cb7'

const store = {
    city: 'London',
}

const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`)
    const data = await result.json()
    const { current: { feelslike, cloudcover, temperature } } = data

    console.log('data', data)
}

fetchData()

