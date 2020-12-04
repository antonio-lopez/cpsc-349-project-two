import React from 'react';
import { Cards, Chart, CountryPicker, GlobalMetrics, Map } from './components'; // comes from the components/index.js export
import styles from './App.module.css';

// USING FUNCTIONAL COMPONENTS WITH HOOKS AND APP IS CLASS BASED
class App extends React.Component {

    render() {

        return (
            <div className={styles.container}>
                <h1>Global Data</h1>
                <Cards />   {/* DISPLAYS CARDS WITH GLOBAL DATA */}
                <GlobalMetrics />   {/*DISPLAYS TABLE WITH GLOBAL DATA */}
                <Chart />   {/* DISPLAYS A RESPONSIVE GRAPH WITH GLOBAL DATA */}
                <Map />     {/* DISPLAYS A RESPONSIVE GLOBAL MAP WITH COUNTRY DATA */}
                <CountryPicker />
            </div>
        )
    }
}

export default App;