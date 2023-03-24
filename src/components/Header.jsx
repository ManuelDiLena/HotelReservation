import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, makeStyles, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

    const [mobile, setMobile] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const classes = useStyle()

    // Function to change the header depending on the screen size
    useEffect(() => {
        const responsive = () => window.innerWidth < 400 ? setMobile(true) : setMobile(false)
        responsive();
        window.addEventListener('resize', () => responsive())
    }, [])

    // Function for header with mobile size
    const displayMobile = () => {
    
        // Function to open menu
        const handleDrawerOpen = () => {
            setDrawerOpen(true)
        }

        // Function to close menu
        const handleDrawerClose = () => {
            setDrawerOpen(false)
        }

        const menuData = ['My Account', 'Reservations', 'Setting', 'Log Out']

        // Function to get menu listing
        const getDrawerChoises = () => {
            return menuData.map((data) => {
                return (
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                )
            })
        }

        return (
            <Toolbar className={classes.toolbar}>
                <IconButton {...{edge:'start', color:'inherit', 'aria-label':'menu', 'aria-haspopup':'true', onClick: handleDrawerOpen,
                }}>
                    <MenuIcon fontSize='large'/>
                </IconButton>
                <Drawer {...{anchor:'left', open:drawerOpen, onClose:handleDrawerClose,}}>
                    <div>{ getDrawerChoises() }</div>
                </Drawer>
                <Link to={`/`}>
                    <img src={logo} alt='' className={classes.logo}/>
                </Link>
                <div className={classes.right}>
                    <Avatar className={classes.avatar}/>
                </div>
            </Toolbar>
        )
    }

    // Function for header with desktop size
    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Link to={`/`}>
                    <img src={logo} alt='' className={classes.logo}/>
                </Link>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder='Search here...' inputProps={{className: classes.input}}/>
                    <SearchIcon className={classes.text}/>
                </div>
                <div className={classes.right}>
                    <Avatar className={classes.avatar}/>
                </div>
            </Toolbar>
        )
    }

    return (
        <AppBar className={classes.root}>
            { mobile ? displayMobile() : displayDesktop() }
        </AppBar>
    )
}

// Constant with object to generate styles
const useStyle = makeStyles((theme) => ({
    root: {
        position: 'sticky',
        top: 0,
        backgroundColor: '#6E5773',
        zIndex: 99,
        width: '100vw'
    },
    text: {
        color: '#E9E2D0',
        fontSize: '1.2rem',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        height: '50px',
        margin: theme.spacing(1,0,1,2),
        objectFit: 'contain',
        cursor: 'pointer'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        minWidth: '200px',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border: '2px solid #E9E2D0',
        borderRadius: '999px'
    },
    input: {
        fontSize: '1.2rem',
        padding: theme.spacing(1,5,1,5),
        color: '#E9E2D0',
        cursor: 'pointer'
    },
    right: {
        color: '#E9E2D0',
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(2)
    },
    avatar: {
        marginLeft: theme.spacing(2)
    }
}))

export default Header