import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const Footer = () => {

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Typography variant='subtitle1' gutterBottom>
                2023 Copyright by ManuelDiLena
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
                Privacy . Terms . Sitemap
            </Typography>
        </div>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid #CCC',
        backgroundColor: '#E9E2D0',
        color: '#D45D79',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: theme.spacing(2)
    }
}))

export default Footer