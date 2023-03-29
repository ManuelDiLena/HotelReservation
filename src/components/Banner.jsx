import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import bannerBkg from '../images/bannerBkg.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography variant='h2'>Plan your getaway...</Typography>
                <Link to='/search' className={classes.btnBanner}>
                    <Button variant='contained'>Check our rooms</Button>
                </Link>
            </div>  
        </div>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        height: '75vh',
        position: 'relative',
        backgroundImage: `url(${bannerBkg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    info: {
        backgroundColor: '#222831',
        color: '#E9E2D0',
        width: '400px',
        padding: theme.spacing(2),
        '& h2': {
            marginBottom: theme.spacing(4),
            letterSpacing: '3px',
            fontWeight: 'bold',
        },
        '& button': {
            backgroundColor: '#D45D79',
            color: '#E9E2D0',
            fontWeight: 'bold',
            fontSize: '1.2rem'
        },
        '& button:hover': {
            backgroundColor: '#D1395C'
        }
    },
    btnBanner: {
        textDecoration: 'none'
    }
}))

export default Banner