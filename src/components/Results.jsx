import React from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'

const Results = ({ src, title, description, price, stock}) => {

    const classes = useStyle()

    return (
        <Paper className={classes.root}>
            <div className={classes.left}>
                <img src={src} alt={title} className={classes.image}></img>
            </div>
            <div className={classes.right}>
                <Typography variant='h5' className={classes.title}>{title}</Typography>
                <Typography variant='body1'>{description}</Typography>
                <Typography variant='body1'>Price per night:
                    <span className={classes.number}> ${price}</span>
                </Typography>
                <Typography variant='body1'>Rooms available:
                    <span className={classes.number}> {stock}</span>
                </Typography>
            </div>
        </Paper>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flexStart',
        margin: theme.spacing(1)
    },
    left: {
        margin: theme.spacing(2,5,5,5)
    },
    image: {
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '10px'
    },
    right: {
        margin: theme.spacing(2,5,5,5)
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    number: {
        fontWeight: '700',
    }
}))

export default Results