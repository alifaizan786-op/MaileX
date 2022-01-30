import React, { useState } from 'react';
import '../header/header.css'
import { AppBar, Avatar, Badge, Toolbar, Typography} from '@mui/material';
import { alpha, InputBase, makeStyles } from '@material-ui/core';
import {Cancel,  Search } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: '#008080',
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontFamily: 'Old Standard TT',
      fontWeight: 'bolder'
    },
  },
  logoSm: {
    display: "block",
    fontFamily: 'Old Standard TT',
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: 20,
    
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
 
}));


function Header() {
  const [open,setOpen]=useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h4' className={classes.logoLg}>
              Mail-eX
          </Typography>
          <Typography variant='h4'className={classes.logoSm}>
              Mail-eX
          </Typography>
          <div className={classes.search}>
            <Search/>
            <InputBase placeholder='Search' className={classes.input}/>
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
          <div className={classes.icons}>
            <Search className={classes.searchButton} 
            onClick={() => setOpen(true)} />
        
          <Avatar
            alt="Remy Sharp"
            src="https://raw.githubusercontent.com/alifaizan786-op/Full_Stack_Portfolio/main/assets/images/placeholder.png"
          />
          </div>
          
        </Toolbar>
    </AppBar>
    
  );
}

export default Header;
