import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));



const SearchTeacher = () => {
    const classes = useStyles();
    const [ searchText, setSearchText ] = useState("");
    const captureText = (e) => {
        setSearchText(e.target.value);
    }
    const resetSearch = () => {
        setSearchText("");
    }
    return (
        <Paper component="form" className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                value={searchText}
                onChange={captureText}
                className={classes.input}
                placeholder="search registered Teacher"
                inputProps={{ 'aria-label': 'search registered Teacher' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <CloseIcon onClear={resetSearch}/>
            </IconButton>
            <Button variant="contained" color="primary">
                Search
                </Button>
        </Paper>
    )
}

export default SearchTeacher;