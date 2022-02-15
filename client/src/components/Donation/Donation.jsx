import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Paypel from '../Donation/paypal.png';
import Visa from '../Donation/Visa.png';
import MS from '../Donation/MS.png';
import Discover from '../Donation/Discover.png';

const useStyles = makeStyles((theme) => ({
  donationCol:{
     display: 'flex',
      justifyContent: 'center',
      padding: "7px 0 3px  0",
  },
  donationBox:{
      paddingTop: "30px",
      textAlignLast: 'center',
      background: '#ffffff'
      
  },
  donationCard:{
      background:"#ffffff",    
  },
  donatiobWidth:{
      width: "-webkit-fill-available"
  }

}));

function Donation(props) {
    const classes = useStyles();
    return (    
        <Grid   container className={classes.donationBox}>
            <Grid  xs={12} sm={12} md={12} className={classes.donationCol}>
                    <Card sx={{background:"#ffffff" ,width: 860  }}>      
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Donate Now
                        </Typography>
                        <div>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="ONE TIME" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="MONTHLY" />
                        </div>
                        <div>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" className={classes.donatiobWidth}>
                              
                                5$
                                </Button>
                            <Button variant="outlined" className={classes.donatiobWidth} >10$</Button>
                            <Button variant="outlined" className={classes.donatiobWidth} >15$</Button>
                            <Button variant="outlined" className={classes.donatiobWidth} >20$</Button>
                        </Stack>
                        </div>
                        <div className={classes.donationCol}>
                            <TextField id="outlined-basic" label="Other" variant="outlined" className={classes.donatiobWidth} />
                        </div>
                        <div className={classes.donationCol}>
                            <Button variant="outlined"  >Donate</Button>
                        </div>
                        <div >
                            <Button variant="outlined" disabled >
                            <img alt='Paypel' src={Paypel} width={50} border='solid' ></img>
                            </Button>
                            <Button variant="outlined" disabled >
                            <img alt='Visa' src={Visa} width={40} border='solid'></img>
                            </Button>
                            <Button variant="outlined" disabled >
                            <img alt='MasterCard' src={MS} width={25} border='solid'></img>
                            </Button>
                            <Button variant="outlined" disabled >
                            <img alt='Discover' src={Discover} width={30} border='solid'></img>
                            </Button>
                        </div>
                    </CardContent>
                        
                </Card> 
            </Grid>
                
            

        </Grid>
    );
}
 
export default Donation;