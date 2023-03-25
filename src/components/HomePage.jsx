import { React, useState } from 'react'
import { Button, CssBaseline, makeStyles } from '@material-ui/core'
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
                <Banner />
                <div className={classes.section}>
                    <RoomCard />
                </div>
            </div>
        </>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
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