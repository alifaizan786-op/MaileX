import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';


import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  footerCol:{
    //  display: 'flex',
      justifyContent: 'center',
      textAlignLast: 'center'
  },
  footerBox:{
      paddingTop: "30px",
      background: '#e8ffff', 
      display: "flex",
      justifyContent: 'center'    
    }
}));

function Footer() {
    const classes = useStyles();
    return (    
        <Grid container className={classes.footerBox}>
            <Grid  xs={12} sm={12} md={12} className={classes.footerCol}>
              
               <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
     
      <Typography>
          © All Right Resever to Mail-Ex LifeTime
      </Typography>
     
               </List>
            </Grid>
                
            
            
        </Grid>
    );
}

export default Footer;