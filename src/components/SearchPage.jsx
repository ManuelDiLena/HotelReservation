import React from 'react'
import { Chip, makeStyles, Slider, Typography } from '@material-ui/core'
import { chips } from '../mockData'
import { HighlightOffTwoTone } from '@material-ui/icons'

const SearchPage = () => {

    const classes = useStyle()

    return (
        <div className={classes.root}>
           <Typography variant='h5' gutterBottom className={classes.title}>
                Available rooms
            </Typography> 
            <div className={classes.chips}>
                {
                    chips.map(({key, label}) => {
                        let icon = <HighlightOffTwoTone/>
                        return (
                            <Chip
                                variant='outlined'
                                label={label}
                                key={key}
                                icon={icon}
                                className={classes.chip}
                            />
                        )
                    })
                }
            </div>
            <div className={classes.selector}>
                <Typography gutterBottom>Prices</Typography>
                <Slider 
                    aria-labelledby='range-slider'
                    min={100}
                    max={400}
                    valueLabelDisplay='auto'
                    color='secondary'
                />
            </div>
        </div>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        color: '#D45D79',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        margin: theme.spacing(5,0,2,5),
        letterSpacing: '1px'
    },
    chips: {
        padding: theme.spacing(1,1,1,3)
    },
    chip: {
        margin: theme.spacing(1),
        color: '#EA9085',
        border: '2px solid #EA9085',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    selector: {
        width: '500px',
        marginLeft: theme.spacing(5)
    }
}))

export default SearchPage