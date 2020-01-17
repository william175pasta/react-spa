import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(them => ({
    root: {
        padding: '25px'
    },
    btnP: {
        fontSize: '20px',
    },
    a: {
        cursor: 'pointer',
        width: '50px',
        height: '30px',
        textAlign: 'center',
        backgroundColor: 'black',
        fontSize: '18px',
        color: '#ccc',
        borderRadius: '10px',
    },
    size: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '18px',
    },
}))

const Cart = {
    size: ["XS", "S", "M", "L", "XL"],
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    colors:
        [{ color: "red", chinese: '紅' },
        { color: "white", chinese: '白' },
        { color: "yellow", chinese: '黃' },
        { color: "blue", chinese: '藍' },
        { color: "green", chinese: '綠' }
        ],
}
const ProductContemt = {
    price: [219],               //初始價錢
    discountnumber: [1, 3, 5],  //件數
    discount: [89, 79]          //總價折扣數
}

const ShoppingCart = () => {
    // 一件 219元 , 3件89折 , 5件79折
    const classes = useStyles();
    const [selectSize, setselectSize] = useState("");
    const [selectNumber, setselectNumber] = useState();
    const [selectColor, setselectColor] = useState("");
    const [total, settotal] = useState(0);
    const [carContent, setcarContent] = useState("")
    const [allnumber, setallnumber] = useState([])

    const handlerChangeNumber = (event) => {
        let value = event.target.value
        console.log("value(數量):" + value)
        const pice = 219
        setselectNumber(value)
        settotal(pice * value)
    }
    const sizeOnClick = (e) => {
        let selectSize = event.target.name;
        setselectSize(selectSize)
        console.log("size : " + selectSize)
    }
    const colorOnClick = (e) => {
        let color = e.target.name
        setselectColor(color)
        console.log("color : " + color)
    }

    //購物車按鈕
    const shoppingcartOnClick = () => {
        if (selectNumber == undefined) {
            alert("請確認輸入的 數量!")
        }
        else if (selectSize == undefined || selectSize == "") {
            alert("請確認輸入的 size!")
        }
        else if (selectColor == undefined || selectColor == "") {
            alert("請確認輸入的 Color!")
        }
        else {
            const shoppingcart =
                ` ( 尺寸:${selectSize} ,數量:${selectNumber}件 顏色:${selectColor})`
            console.log(shoppingcart)
            setcarContent(shoppingcart.concat(carContent))
            let number = parseFloat(selectNumber) //把 selectNumber 轉成 數字型別
            let newarry = allnumber.push(number)//把輸入的 件數 加入allnumber陣列裡 
            console.log(allnumber)
            setselectSize();
            setselectNumber();
            setselectColor();
            settotal();
        }
    }
    //清除購物車按鈕
    const shoppingcartClearOnClick = () => {
        setcarContent("")
        setallnumber([])
        console.log(carContent)
        console.log(allnumber)
    }
    //結帳按鈕
    const CheckoutBTN = () => {
        if (selectNumber == 0 || selectColor == "" || selectSize == "" || carContent == "") {
            alert("請重新輸入 尺寸 數量 顏色 謝謝 !!!")
            return
        }
        let price = 219, sum = 0;
        for (let i = 0; i < allnumber.length; i++) {
            sum = sum + allnumber[i]
            console.log("sum:  " + sum)
        }
        if (sum > 2 && sum < 5) {
            settotal(Math.round(price * sum * 0.89))
        } else if (sum > 5) {
            settotal(Math.round(price * sum * 0.79))
        } else {
            settotal(Math.round(price * sum))
        }
        setselectSize("");
        setselectNumber(0);
        setselectColor("");
        setcarContent("")
        setallnumber([])
        alert("你的總金額計算中....")
        return
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={12} >
                    <h3>購物車</h3>
                </Grid>
                <Grid item xs={12}   >
                    <h4>
                        {ProductContemt.discountnumber[0]} 件
                        {ProductContemt.price[0]} 元 ,
                        <br />
                        {ProductContemt.discountnumber[1]} 件
                        {ProductContemt.discount[0]} 折
                        {ProductContemt.discountnumber[2]} 件
                        {ProductContemt.discount[1]} 折
                    </h4>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <h5>尺寸 : </h5>
                    <div className={classes.size}>
                        {
                            Cart.size.map((item, index) => {
                                return <a
                                    className={classes.a}
                                    onClick={sizeOnClick}
                                    name={item}
                                    key={index}
                                    style={{ textDecoration: 'none' }}>{item}</a>
                            })
                        }
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <h5>數量 : </h5>
                    <div className={classes.size}>

                        <select value={selectNumber} onChange={handlerChangeNumber} style={{ width: '80%', height: '30px' }} >
                            {
                                Cart.number.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <h5>顏色 : </h5>
                    <div className={classes.size}>
                        {
                            Cart.colors.map((item, index) => {
                                const { color, chinese } = item
                                return <a className={classes.a}
                                    onClick={colorOnClick}
                                    style={{ backgroundColor: `${color}`, textDecoration: 'none' }}
                                    name={chinese}
                                    key={index}></a>
                            })
                        }
                    </div>
                </Grid>
                <Grid item xs={12} >
                    <h3>尺寸:{selectSize}  </h3>
                    <h3>數量:{selectNumber}  </h3>
                    <h3>顏色:{selectColor}  </h3>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Button variant="contained" color="primary" onClick={shoppingcartOnClick}>
                        <span className={classes.btnP}>加入購物車  </span>
                        <LocalGroceryStoreOutlinedIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Button variant="contained" color="primary" onClick={shoppingcartClearOnClick}>
                        <span className={classes.btnP}>清除購物車  </span>
                        <LocalGroceryStoreOutlinedIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Button variant="contained" color="primary" onClick={CheckoutBTN}>
                        <span className={classes.btnP}>結帳  </span>
                        <MonetizationOnIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} >
                    <p>購物車內容:{carContent}  </p>
                </Grid>
                <Grid item xs={12} >
                    <h2> 金額$: {total} 元</h2>
                </Grid>

            </Grid>
        </div >
    )
}
export default ShoppingCart