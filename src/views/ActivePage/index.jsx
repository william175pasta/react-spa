import * as React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import ShoppingCart from './shoppingcart'
import ProgTest from './progTest'
import FiveAverage from './fiveAverage'
import DateClock from './dateClock';

const useStyles = makeStyles(them => ({
    a: {
        cursor: 'pointer',
        border: '1px solid red',
        width: '50px',
        height: '30px',
        textAlign: 'center',
        backgroundColor: '#f87',

    },
    size: {
        display: 'flex',
        justifyContent: 'space-around',
    }

}))


const ActivePage = (props) => {
    const classes = useStyles();

    const [count, setcount] = useState(0)
    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [gender, setgender] = useState("")
    const [outputfile, setoutputfile] = useState("")
    const [open, setopen] = useState(true)
    const [openText, setopenText] = useState("")

    const onChangename = (event) => {
        let value = event.target.value;
        console.log(value);
        setname(value);
    }
    const onChangenumber = (event) => {
        let value = event.target.value;
        console.log(value);
        setnumber(value);
    }
    const onChangegender = (event) => {
        let value = event.target.value;
        console.log(value);
        setgender(value);
    }
    const onClickEvent = () => {
        if (open) {
            setopenText("開啟")
            setopen(false)
        } else {
            setopenText("關閉")
            setopen(true)
        }
    }



    const onClickCountEvent = () => {
        setcount(count + 1)
    }
    const onClickTextEvent = () => {
        setoutputfile(`姓名:${name} ,電話:${number} ,性別:${gender}`)
    }
    const ClearTextEvent = () => {
        setoutputfile("")
    }

    return (
        <div>
            <Header />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee', }}>

                            <DateClock />

                            <ShoppingCart />

                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee', }}>

                            <ProgTest />

                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee', }}>

                            <FiveAverage />

                        </Typography>
                    </Paper>
                </Container>
            </React.Fragment >
            <Footer />
        </div >
    );
};

export default ActivePage;