import React, { useState, useEffect } from 'react';
import { fetchCountryData } from '../../api';
// Table UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    // console.log(countryData);

    // create an array from the CountryData object
    const countries = Object.values(countryData);
    
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell>Confirmed</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>Deaths</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {countries.map((country) => (
                            <TableRow key={country.country}>
                                <TableCell component="th" scope="country">{country.country}</TableCell>
                                <TableCell>{country.cases}</TableCell>
                                <TableCell>{country.active}</TableCell>
                                <TableCell>{country.deaths}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default GlobalMetrics;