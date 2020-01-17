import React, { useState, } from "react";

import * as ReactDOM from 'react-dom';


const FiveAverage = () => {



    const [oneday, setoneday] = useState(0)
    const [twoday, settwoday] = useState(0)
    const [threeday, setthreeday] = useState(0)
    const [fourday, setfourday] = useState(0)
    const [fiveday, setfiveday] = useState(0)

    const [values, setvalues] = useState([])

    const [avg, setavg] = useState(0)


    const numberChangehandler1 = (e) => {
        setoneday(e.target.value)
        console.log("oneday: " + oneday)
    }
    const numberChangehandler2 = (e) => {
        settwoday(e.target.value)
        console.log("twoday: " + twoday)

    }
    const numberChangehandler3 = (e) => {
        setthreeday(e.target.value)
        console.log("threeday: " + threeday)

    }
    const numberChangehandler4 = (e) => {
        setfourday(e.target.value)
        console.log("fourday: " + fourday)

    }
    const numberChangehandler5 = (e) => {
        setfiveday(e.target.value)
        console.log("fiveday: " + fiveday)

    }


    const AverageBTN = () => {

        if (
            oneday === 0 || isNaN(oneday) ||
            twoday === 0 || isNaN(oneday) ||
            threeday === 0 || isNaN(oneday) ||
            fourday === 0 || isNaN(oneday) ||
            fiveday === 0 || isNaN(oneday)
        ) {
            alert("請確實輸入...")
        }
        else {
            values.push(oneday, twoday, threeday, fourday, fiveday)
            let sum = 0
            for (let i = 0; i < values.length; i++) {
                let n = parseFloat(values[i])
                console.log("n:" + n)
                sum = sum + n
            }
            let avgnumber = (sum / values.length).toFixed(2)
            console.log("sum:" + sum)
            console.log("avgnumber:" + avgnumber)
            console.log(values)
            setavg(avgnumber)
        }


    }


    return (
        <div>

            <input type="text" value={oneday} onChange={numberChangehandler1} />
            <input type="text" value={twoday} onChange={numberChangehandler2} />
            <input type="text" value={threeday} onChange={numberChangehandler3} />
            <input type="text" value={fourday} onChange={numberChangehandler4} />
            <input type="text" value={fiveday} onChange={numberChangehandler5} />

            <button onClick={AverageBTN}> 計算5MA</button>

            <h2>{`5MA : ${avg}`}</h2>
        </div>
    )



}
export default FiveAverage