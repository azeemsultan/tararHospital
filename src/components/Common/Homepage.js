import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

const Homepage = () => {
    return ( <div>
        <Grid container style={{border:'1px solid #d1d0cd'}}>
            <Grid item md={2} xs={12}>
            <div>
                        <Typography variant="h6"  style={{textAlign:'center',marginTop:'25px'}}>
                            Logo here
                        </Typography>
                        
                        </div>
                </Grid>
                <Grid item md={7}>
                <div style={{height:'70px',display:'inline-flex',marginTop:'10px'}}>
                
                        <div>
                            
                        <Typography variant="h6" style={{textAlign:'center'}} >
                            Doctors
                        </Typography>
                        <Typography variant="subtitle2" >
                            Book an Appointment
                        </Typography>
                        </div>
                        <div style={{marginLeft:'40px'}}>
                            
                            <Typography variant="h6" style={{textAlign:'center'}} >
                                Doctors
                            </Typography>
                            <Typography variant="subtitle2" >
                                Book an Appointment
                            </Typography>
                            </div>
                            <div style={{marginLeft:'40px'}}>
                            
                            <Typography variant="h6" style={{textAlign:'center'}} >
                                Doctors
                            </Typography>
                            <Typography variant="subtitle2" >
                                Book an Appointment
                            </Typography>
                            </div>
             
                </div>
            </Grid>
            <Grid item md={3} xs={12}>
                <button style={{color:'white',backgroundColor:'blue',marginTop:'20px',borderRadius:'18px',height:'35px',border:'1px solid blue',marginBottom:'10px'}}>
                  Login/Signup  
                </button>
                </Grid>
       
        </Grid>

        <Grid container>
            <Grid item md={6}>
                <div style={{backgroundColor:'#d1d0cd',marginTop:'1px',height:'400px'}}>
                <div style={{textAlign:'center',marginLeft:'20%',marginRight:'20%',paddingTop:'5%',color:'blue'}}>
                    <Typography variant="h2" >
                        Lorem ipsum dolorsit cons
                    </Typography>
                    <Typography variant="subtitle1">
                        Adips is lorem fics omunga lorem cons gago ka putanginamo putang tanga ka gago bobo ako mid ako throw walang tala gang
                    </Typography>
                    <div style={{display:'inline-flex',marginTop:'20px'}}>
                    <Button variant="outlined"
                    style={{border:'1px solid blue',borderRadius:'16px'}}
                    >Start Consulting</Button>
                   <Typography variant="subtitle1"
                   style={{marginLeft:'20px',color:'blue',marginTop:'3px'}}
                   >Find Doctors now</Typography>
</div>
                </div>
                
                </div>
            </Grid>
            <Grid item md={6}>
                <div style={{backgroundColor:'#d1d0cd',marginTop:'1px',height:'400px'}}>
                    </div>
                    </Grid>
        </Grid>
    </div> );
}
 
export default Homepage;