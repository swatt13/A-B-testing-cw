import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import {create} from '../ad/api-ad.js'
import baseImg from './../assets/dog-api-logo.svg'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase';
import CardActions from '@material-ui/core/CardActions';
import { CloudOffSharp } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
      minHeight: 400,
      width:'100%'
    },
    bottomAd: {
        verticalAlign: 'middle',
        width: 600
    },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))
/**
constructor(props){
    super(props);
    this.state = {
        dogURL: '',
    }
}
**/

export default function Home() {
    
    const randomDogs = async () => {
        try {
            let response = await fetch('https://dog.ceo/api/breeds/image/random', {
                method: 'GET'
            })
            console.log(response.json())
            return await response.json()
        } catch (err) {
            console.log(err)
        }
    }
    const click = () => {
        //refresh dog images
        /**
        this.setState = randomDogs();
        
        render(){
            const { dogURL } = this.state;
            return (<CardMedia className={classes.media} image={dog1URL} title="Dog1" />);
        }
        **/
    }
    const adClick = () => {
        
        const ad = {
            wasClicked: true,
            option: "below"
        };
        create(ad)
    }
    const adType = () => {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        if (rand < 50) {
            return (<ButtonBase className={classes.cardAction}
                onClick={adClick("bottom")}>
                <CardMedia className={classes.bottomAd} image={baseImg} title="Advert" />
            </ButtonBase>)
        }
        else {
            return (<ButtonBase className={classes.cardAction}
                onClick={adClick("side")}>
                <CardMedia className={classes.media} image={baseImg} title="Advert" />
            </ButtonBase>)
        }
            }
            const classes = useStyles()
            return (
        <Card className={classes.card}>
          <Typography variant="h6" className={classes.title}>
  
            </Typography>
            <Card className={classes.card}>
                <Grid container alignItems="center" className={classes.root}>
                    
                    
                    <CardMedia className={classes.media} image={baseImg} title="Dog1" />
                    <Button onClick={click}>Good Dog</Button>
                    <Divider orientation="vertical" flexItem/>
                    <CardMedia className={classes.media} image={baseImg} title="Dog2" />
                    <Button onClick={click}>Good Dog</Button>
                </Grid>
            </Card>
            <Card>
                        <Button className={classes.bottomAd} onClick={adClick}>
                            Ad placeholder
                        </Button>   
                    
            </Card>
        </Card>
        
    )
}

