import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  donationCol:{
     display: 'flex',
      justifyContent: 'center',
      padding: "15px",
  },
  donationBox:{
      paddingTop: "30px",
      textAlignLast: 'center',
      background: '#ffffff'
      
  },
  donationCard:{
      background:"#B1F7F8",
      
  }
}));

function Donation(props) {
    const classes = useStyles();
    return (    
        <Grid   container className={classes.donationBox}>
            <Grid xs={12} sm={6} md={4} className={classes.donationCol}>
                <Card sx={{ maxWidth: 345 }} className={classes.donationCard}>
                    
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                           Goal
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                            are a widespread group of squamate reptiles, with over 6,000
                           species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                    <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
                
            <Grid  xs={12} sm={6} md={4} className={classes.donationCol}>
                    <Card sx={{background:"#ffffff" ,width: 430  }}>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Mission
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Donation deYour donation provides meaningful personalized support to help 
                            succeed and persist through college, graduate, and go far in life!
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                </Card>
            </Grid>

            <Grid  xs={12} sm={6} md={4} className={classes.donationCol}>
                    <Card sx={{ maxWidth: 345 }}>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Vission
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            are a widespread group of squamate reptiles, with over 6,000
                           species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                </Card>
                
            </Grid>
        </Grid>
    );
}
 
export default Donation;