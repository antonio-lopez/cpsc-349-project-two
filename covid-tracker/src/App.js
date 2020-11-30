import React from 'react';
import { Cards, Chart, CountryPicker, GlobalMetrics, Map } from './components'; // comes from the components/index.js export
import styles from './App.module.css';
import { fetchData } from './api'

// USING FUNCTIONAL COMPONENTS WITH HOOKS AND APP IS CLASS BASED

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    render() {
        const { data } = this.state;    //destructure data from state

        return (
            // <div className="container"> - old version, makes sure you don't have interferace with
            // any other CSS files across with NPM classNames
            <div className={styles.container}>
                <h1>Global Data</h1>
                <Cards data={data}/>
                <GlobalMetrics />

                <CountryPicker />
                <Chart />
                <Map />
            </div>
        )
    }
}

export default App;