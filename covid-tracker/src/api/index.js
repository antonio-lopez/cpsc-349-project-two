// functions that fetches data
import axios from 'axios';

// const url = 'https://corona.lmao.ninja/v2/all';
const url = 'https://disease.sh/v3/covid-19/all';

export const fetchData = async () => {
    //asynchronous function returns a response from the API and sends it to App.js
    try {
        // destructure data to make syntax easier
        const { data : { cases, active, recovered, deaths } } = await axios.get(url);
        // Cumulative confirmed (cases), active, recovered, and died cases
        return { cases, active, recovered, deaths};

    } catch (error) {
        return error;
    }
}

export const fetchCountryData = async () => {
    try {
        const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');

        const modifiedCountryData = data.map((dailyData) => ({
            country: dailyData.country,
            cases: dailyData.cases,
            active: dailyData.active,
            deaths: dailyData.deaths
        }));

        return modifiedCountryData;
    } catch (error) {
        return error;
    }
}