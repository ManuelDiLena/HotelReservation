import React from 'react'
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { People } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectStart, setStart } from '../features/startSlice'
import { selectEnd, setEnd } from '../features/endSlice'

const DatePicker = () => {

    const classes = useStyle()
    const start = useSelector(selectStart)
    const end = useSelector(selectEnd)
    const dispatch = useDispatch()

    // Configuration of the ranges in which the calendar will be displayed
    const selectionRange = {
        startDate: start,
        endDate: end,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        console.log(ranges)
        dispatch(setStart(ranges.selection.startDate.getTime()))
        dispatch(setEnd(ranges.selection.endDate.getTime()))
    }

    return (
        <div className={classes.root}>
            <DateRangePicker 
                ranges={[selectionRange]} 
                onChange={handleSelect}
            />
            <div className={classes.inputSection}>
                <Typography variant='h5'>Number of people</Typography>
                <div className={classes.people}>
                    <InputBase placeholder='2pax'
                        inputProps={{className: classes.input}}
                    />
                    <People />
                </div>
                <Link to='/search' className={classes.btnSection}>
                    Search Rooms
                </Link>
            </div>
        </div>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '13vh',
        left: '30vw',
        zIndex: '50',
        [theme.breakpoints.down('xs')]: {
            top: '16vh',
            left: 0,
        }
    },
    inputSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        '& h5': {
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '16px'
        }
    },
    btnSection: {
        backgroundColor: '#EA9085',
        color: '#E9E2D0',
        width: '100%',
        textAlign: 'center',
        padding: '3px',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
    people: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '5vw',
        border: '1px solid #E9E2D0',
        borderRadius: '3px',
        margin: theme.spacing(0,2,2,0),
        padding: theme.spacing(1,0,1,3)
    }
}))

export default DatePicker