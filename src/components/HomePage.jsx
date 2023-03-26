import { React, useState } from 'react'
import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core'
import mockData from '../mockData';
import Banner from './Banner'
import RoomCard from './RoomCard'
import DatePicker from './DatePicker'

const HomePage = () => {

    const classes = useStyle()
    const [showCalendar, setShowCalendar] = useState(false)

    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Banner />
                <div className={classes.dates}>
                    <Button onClick={ () => setShowCalendar(!showCalendar) }>
                        {
                            showCalendar ? 'Hide Calendar' : 'Calendar'
                        }
                    </Button>
                </div>
                {
                    showCalendar && <DatePicker />
                }
                <Grid container className={classes.section} spacing={1}>
                    {
                        mockData.map(({src, title, description}, index) => (
                            <Grid item sm='6' md='5' lg='4'>
                                <RoomCard 
                                    src={src} 
                                    title={title} 
                                    description={description} 
                                    key={index}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    dates : {
        display: 'flex',
        flexDirection: 'column',
        '& button': {
            backgroundColor: '#E9E2D0',
            color: '#D45D79',
            fontSize: '1.2rem',
            fontWeight: 'bold'
        },
        '& button:hover': {
            backgroundColor: '#D45D79',
            color: '#E9E2D0',
        }
    },
}))

export default HomePage