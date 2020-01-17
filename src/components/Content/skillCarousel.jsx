import React, { Fragment } from "react";

import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';

import Pic01 from '../../img/frontend/001.jpg'
import Pic02 from '../../img/frontend/002.jpg'
import Pic03 from '../../img/frontend/003.jpg'
import Pic04 from '../../img/frontend/004.jpeg'
import Pic05 from '../../img/frontend/005.png'
import Pic06 from '../../img/frontend/006.jpeg'
import Pic07 from '../../img/frontend/007.png'
import Pic08 from '../../img/frontend/008.jpg'
import Pic09 from '../../img/frontend/009.png'
import Pic10 from '../../img/frontend/010.jpg'

const SkillCarousel = () => {

    const imgesAll = {
        array: [Pic01, Pic02, Pic03, Pic04, Pic05, Pic06, Pic07, Pic08, Pic09, Pic10]
    }
    return (
        <div>
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
        </div>
    )
}
export default SkillCarousel;









