// DISPLAYS TABLE WITH GLOBAL DATA

import React, { useState, useEffect } from 'react';
import { fetchCountryData } from '../../api';
import numeral from "numeral";
// Table UI
import { makeStyles } from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';
// Table styles
const useStyles = makeStyles({
    root: {
      width: '60%',
    },
    container: {
      maxHeight: 440,
    },
  });

const GlobalMetrics = () => {
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialCountryData = await fetchCountryData();
            setCountryData(initialCountryData);
        };

        fetchMyAPI();
    }, []);



    // create an array from the CountryData object
    const countries = Object.values(countryData);
    const classes = useStyles();
    return (
           <MaterialTable
           title="Reported Cases by Country"
           columns={[
             { title: 'Country', field: 'country' },
             { title: 'Confirmed', field: 'confirmed', type: 'numeric' },
             { title: '(Previous)', field: 'previousR', type: 'numeric' },
             { title: 'Recovered', field: 'recovered', type: 'numeric' },
             { title: '(Previous)', field: 'previousD', type: 'numeric' },
             { title: 'Deaths', field: 'deaths', type: 'numeric' },
             { title: '(Previous)', field: 'previousA', type: 'numeric' },
             { title: 'Active', field: 'active', type: 'numeric' },
             { title: 'Region', field: 'region' },
           ]}

           data={countries}
           options={{
             sorting: true
           }}
         />
    )
}

export default GlobalMetrics;