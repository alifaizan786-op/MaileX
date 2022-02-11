import React, { useState } from 'react';
import '../header/header.css'
import { AppBar, Avatar, Badge, Toolbar, Typography} from '@mui/material';
import { alpha, InputBase, makeStyles } from '@material-ui/core';
import {Cancel,  Search } from '@mui/icons-material';
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  appbar:{
    zIndex:1300,
    background: '#008080',
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: '#008080',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:"center",
    [theme.breakpoints.down("xs")]: {
    justifyContent:"left",
    },
  },
  search: {
    margin: '10px 0px 0px 0px',
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: 20,
    
    display: (props) => (props.open ? "flex" : "none"),
      
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    padding: 10,
    marginRight: theme.spacing(2),
    
  },
  icons: {
    margin: '5px 10px 0px 0px',
    justifyContent: 'right',
    display: (props) => (props.open ? "none" : "flex"),
  },
  MenuIcon: {
    margin: 5,
    color: alpha(theme.palette.common.white, 1),
  },
  logoLg: {
      display: 'flex',
      justifyContent: 'center',
      margin: 5,
      fontFamily: 'Old Standard TT',
      fontWeight: 'bolder',
      display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      
    },
  },
  logoSm: {
      alignitems: 'center',
      justifyContent: 'center',
      margin: '5px 5px 0px 0px',
      marginbottom: 0,
      fontFamily: 'Old Standard TT',
      fontWeight: 'bolder',
      display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
      
    },
  }
 
}));


function Header(props) {
  const [open,setOpen]=useState(false);
  const classes = useStyles({open});

  return (
    <AppBar position='fixed' className={classes.appbar}> 
      <Grid container spacing={3}>
        <Grid item xs={2} sm={3} md={3}>
            {props.current ? 
            <Button className={classes.MenuIcon} onClick={props.close}>
            <ChevronLeftIcon/>
          </Button>
            :
            <Button className={classes.MenuIcon} onClick={props.open}>
            <ChevronRightIcon/>
          </Button>
            }
        </Grid>
        <Grid item xs={4}  sm={6} md={6} className={classes.logo}>
          <Typography variant='h4' className={classes.logoLg}>
              <a href="#">Mail-eX</a>
          </Typography>
          <Typography variant='h5'className={classes.logoSm}>
              <a href="#">Mail-eX</a>
          </Typography>
        </Grid>
        <Grid item xs={5.9} sm={3} md={3} >
            <div className={classes.search}>
              <Search/>
              <InputBase placeholder='Search' className={classes.input}/>
              <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
            <div className={classes.icons}>
              <Search className={classes.searchButton} 
              onClick={() => setOpen(true)} />
            </div>
        </Grid>
            
      </Grid>
    </AppBar>
    
  );
}

export default Header;
