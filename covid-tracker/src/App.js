import React from 'react';
import { Cards, Chart, CountryPicker, GlobalMetrics, Map, BarChart } from './components'; // comes from the components/index.js export
import styles from './App.module.css';
import { fetchCountryDataForBar } from './api';

// USING FUNCTIONAL COMPONENTS WITH HOOKS AND APP IS CLASS BASED
class App extends React.Component {
    state = { 
        data: {},
        country: ''
    }

    handleCountryChange = async (country) => {          
        const data = await fetchCountryDataForBar(country);  
        this.setState({data: data, country: country});  
     }

    render() {
        const {data, country} = this.state; 

        return (
            <div className={styles.container}>
                <h1>Global Data</h1>
                <Cards />   {/* DISPLAYS CARDS WITH GLOBAL DATA */}
                <GlobalMetrics />   {/*DISPLAYS TABLE WITH GLOBAL DATA */}
                <Chart />   {/* DISPLAYS A RESPONSIVE GRAPH WITH GLOBAL DATA */}
                <Map />     {/* DISPLAYS A RESPONSIVE GLOBAL MAP WITH COUNTRY DATA */}
                <CountryPicker handleCountryChange={this.handleCountryChange}/> {/* PICKS A COUNTRY AND PASSES IT TO BARCHART */}
                <BarChart data={data} country={country}/>   {/* DISPLAYS A RESPONSIVE GRAPH WITH A CHOSEN COUNTRY'S DATA */}
            </div>
        )
    }
}

export default App;