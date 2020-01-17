import * as React from 'react';

import TableForBacil from './TableForBacil'
import TableForCream from './TableForCream'
import TableForTomato from './TableForTomato'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const AboutmethodPage = (props) => {

    return (
        <div>
            <Header />
            <div>
                <div>
                    <React.Fragment>
                        <CssBaseline />
                        <Container maxWidth="lg">
                            <Paper>
                                <Typography component="div" style={{ backgroundColor: '#eee', }}>
                                    <div >
                                        <TableForBacil />
                                        <TableForCream />
                                        <TableForTomato />
                                    </div >
                                </Typography>
                            </Paper>
                        </Container>
                    </React.Fragment>
                </div >
            </div>
            <Footer />
        </div>
    )

}
export default AboutmethodPage