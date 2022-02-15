import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  footerCol:{
    //  display: 'flex',
      justifyContent: 'center',
      textAlignLast: 'center'
  },
  footerBox:{
      paddingTop: "30px",
      background: '#ffffff', 
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
          © MaileX - All Right Resevered 
      </Typography>
     
               </List>
            </Grid>
                
            
            
        </Grid>
    );
}

export default Footer;