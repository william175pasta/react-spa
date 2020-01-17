
import React, { Fragment } from "react";
// import Slider from 'react-slider-light';
import Slider from "react-slick";

import Basil1 from '../../img/product/Basil01.jpg'
import Basil2 from '../../img/product/Basil02.jpg'
import Cream1 from '../../img/product/Cream01.jpg'
import Cream2 from '../../img/product/Cream02.jpg'
import Cream3 from '../../img/product/Cream03.jpg'
import Olive1 from '../../img/product/Olive01.jpg'
import Olive2 from '../../img/product/Olive02.jpg'
import Tomato1 from '../../img/product/Tomato01.jpg'
import Tomato2 from '../../img/product/Tomato02.jpg'
import Tomato3 from '../../img/product/Tomato03.jpg'
import Grid from '@material-ui/core/Grid';


const imgesAll = {
    array: [Tomato1, Tomato2, Tomato3, Cream1, Cream2, Cream3, Basil1, Basil2, Olive1, Olive2]
}

class ImageCarousel extends React.Component {
    render() {
        return (
            <Fragment>
                <Grid item xs={12} >
                    <div style={{ padding: '20px', background: '#ccc' }}>
                        <Slider autoplay={true}
                            autoplaySpeed={2000}
                            slidesToShow={2}
                        >
                            {
                                imgesAll.array.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={item} style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                        </div>
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </Grid>
            </Fragment >
        );
    }
}

export default ImageCarousel