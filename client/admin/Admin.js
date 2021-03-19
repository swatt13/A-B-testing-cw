import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { list } from '../ad/api-ad.js'


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    },
    credit: {
        padding: 10,
        textAlign: 'right',
        backgroundColor: '#ededed',
        borderBottom: '1px solid #d0d0d0',
        '& a': {
            color: '#3f4771'
        }
    }
}))

//Chart.defaults.global.responsive = true;
var PieChart = require("react-chartjs").Pie;
/*
var pieChart = React.createClass({
    render: function () {
        return <PieChart data={chartData} options={chartOptions} />
    }
});
*/
//i hope the internet fails so nobody ever has to suffer through the hell that is web dev again
export default function Admin() {
    const classes = useStyles()
    //const [ads, setAds] = useState([])
    /*
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                console.log("here is the ad stats")
                console.log(data)
                setAds(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    },[])*/
    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Statistics
            </Typography>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}