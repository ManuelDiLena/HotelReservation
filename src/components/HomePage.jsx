import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Banner from './Banner'
import RoomCard from './RoomCard'
import DatePicker from './DatePicker'

const HomePage = () => {

    const classes = useStyle()

    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <div className={classes.dates}>
                    <DatePicker />
                </div>
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

    },
}))

export default HomePage