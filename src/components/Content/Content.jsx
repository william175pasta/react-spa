import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class ContentA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persnoal: {
                works: [
                    { name: 'lapasta', title: 'COMMIS A', time: '2017/07-2019/11' },
                    { name: '175pasta', title: 'COMMIS A', time: '2017/07-2019/11' },
                    { name: 'justitliat', title: 'COMMIS B', time: '2017/07-2019/11' },
                ],
                sauce: [

                    {
                        title: "175PASTA",
                        imageUrl: "./contents/images/logo/01.jpg",
                        desc: "175"
                    },
                    {
                        title: "JUSTITALIAN",
                        imageUrl: "./contents/images/logo/02.jpg",
                        desc: "JUST"
                    },
                    {
                        title: "LAPASTA",
                        imageUrl: "./contents/images/logo/03.jpg",
                        desc: "LA"
                    },
                    {
                        title: "Tomato Sauce",
                        imageUrl: "./contents/images/souse/red/07.png",
                        desc: "紅醬-Recipe:"
                    },
                    {
                        title: "Cream Sauce",
                        imageUrl: "./contents/images/souse/white/07.jpg",
                        desc: "白醬-Recipe:"
                    },
                    {
                        title: "Basil Sauce",
                        imageUrl: "./contents/images/souse/green/07.png",
                        desc: "青醬-Recipe:"
                    }
                ],

                introduction: "我的個性活潑慢熱並善於傾聽他人意見， 喜歡學習新奇的事務，在日新月異的時代充實自己非常重要，料理及程式設計對於我更有別於一般的吸引， 求學一路上並沒有讀正統餐飲學系，但我相信後天的努力與學習更重要，把握任何一次可以學習的機會， 清楚自己喜歡甚麼，而不是找個不對盤的工作，陸續在幾間餐館服務過，從中學習產業的營運及模式， 能體會資訊服務產業的未來發展非常的大，也極具挑戰力。 聽聞 貴公司正招募人才，本人對此一職非常感興趣，如蒙錄用，必當竭誠工作貢獻一己之長。",

                title: ["AboutMe", "WorkExperience", "Company&Sauce"]
            }
        }

    }

    render() {


        return (
            <div>
                <Grid item xs={12} >
                </Grid>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Paper>
                            <Typography component="div" style={{ backgroundColor: '#eee', }}>
                                <div >
                                    <Grid container spacing={3} className="cards">

                                        <Grid item xs={12} >
                                            <h2>{this.state.persnoal.title[0]}</h2>
                                            <p className="content_P">{this.state.persnoal.introduction}</p>
                                        </Grid>

                                        <Grid item xs={12} >
                                            <h2>{this.state.persnoal.title[1]}</h2>
                                        </Grid>
                                        {
                                            this.state.persnoal.works.map((item, index) => {
                                                const { name, title, time } = item
                                                const indexTitle = index + 1
                                                return (
                                                    <Grid item xs={12} sm={4}>
                                                        <div>
                                                            <h5>WORK {indexTitle}</h5>
                                                            <ul>
                                                                <li>CompanyName : {name}</li>
                                                                <li>JobTitle : {title}</li>
                                                                <li>JobTime : {time}</li>
                                                            </ul>
                                                        </div>
                                                    </Grid>
                                                )
                                            })
                                        }
                                        <Grid item xs={12} >
                                            <h2>{this.state.persnoal.title[2]}</h2>
                                        </Grid>
                                        {
                                            this.state.persnoal.sauce.map((item, index) => {
                                                const { title, imageUrl, desc } = item
                                                return (
                                                    <Grid item xs={12} sm={4} className="cardsContent">

                                                        <Card className="cardsContent">
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    style={{ height: 140 }}
                                                                    image={imageUrl}
                                                                    title="Co"
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="h2">
                                                                        {title}
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        {desc}
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>

                                                            <CardActions>
                                                                <Button size="small" color="primary">
                                                                    <a>Share</a>
                                                                </Button>
                                                                <Button size="small" color="primary">
                                                                    Learn More
                                                                </Button>
                                                            </CardActions>
                                                        </Card>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </div >
                            </Typography>
                        </Paper>
                    </Container>
                </React.Fragment>

            </div>

        )
    }
}
export default ContentA;

