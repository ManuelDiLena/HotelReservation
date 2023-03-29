import React, { useState } from 'react'
import { Chip, makeStyles, Slider, Typography } from '@material-ui/core'
import mockData, { chips } from '../mockData'
import { HighlightOffTwoTone } from '@material-ui/icons'
import Results from './Results'
import { useSelector } from 'react-redux'
import { selectStart } from '../features/startSlice'
import { selectEnd } from '../features/endSlice'

const SearchPage = () => {

    const classes = useStyle()
    const [value, setValue] = useState(400)
    const start = useSelector(selectStart)
    const end = useSelector(selectEnd)

    // Function to capture the value of the price slider
    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

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
                <Slider value={value} 
                    onChange={handleChange}
                    aria-labelledby='range-slider'
                    min={100}
                    max={400}
                    valueLabelDisplay='auto'
                    color='secondary'
                />
            </div>
            {
                mockData
                    .filter((data) => data.cat === 'room')
                    .filter((data) => data.price < value)
                    .filter((data) => end < data.notAvailableStart || start > data.notAvailableEnd)
                    .map(({src, title, description, price, stock}, index) => (
                        <Results title={title}
                            key={index}
                            src={src}
                            description={description}
                            price={price}
                            stock={stock}
                        />
                    ))
            }
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