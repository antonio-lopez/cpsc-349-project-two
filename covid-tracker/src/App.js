import React from 'react';
import { Cards, Chart, CountryPicker, GlobalMetrics, Map } from './components'; // comes from the components/index.js export
import styles from './App.module.css';

// USING FUNCTIONAL COMPONENTS WITH HOOKS AND APP IS CLASS BASED
class App extends React.Component {

    render() {

        return (
            <div className={styles.container}>
                <h1>COVID-19 Cases</h1>
                <Cards />   {/* DISPLAYS CARDS WITH GLOBAL DATA */}
                <br /><h1>Timeline of Total Cases per Day</h1>
                <Chart />   {/* DISPLAYS A RESPONSIVE GRAPH WITH GLOBAL DATA */}
                <br /><h1>Global Metrics</h1>
                <GlobalMetrics />   {/*DISPLAYS TABLE WITH GLOBAL DATA */}
                <br /><br /><h1>Worldwide Map</h1>
                <Map />     {/* DISPLAYS A RESPONSIVE GLOBAL MAP WITH COUNTRY DATA */}
                <br /><br /><h1>CountryPicker</h1>
                <CountryPicker />
            </div>
        )
    }
}

export default App;