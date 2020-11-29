import { Avatar, Button, Divider, Grid, IconButton, Input, InputBase, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
                <div style={{backgroundColor:'#d1d0cd',marginTop:'1px',height:'auto'}}>
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
                <div style={{backgroundColor:'#d1d0cd',marginTop:'1px',height:'auto'}}>
                    </div>
                    </Grid>
        </Grid>
        <Grid container>
            <Grid item md={12}>
                <div style={{marginTop:'30px'}}>

              
                <InputBase style={{border:'1px solid blue',borderRadius:'16px',textAlign:'center',width:'15%'}}
        placeholder="  Lahore"
        inputProps={{ 'aria-label': 'search doctors by location' }}
      />
        <IconButton type="submit" aria-label="search">
        <LocationOnIcon />
      </IconButton> 
      
      <InputBase style={{border:'1px solid blue',borderRadius:'16px',textAlign:'center',width:'40%'}}
        placeholder="   Search Doctors By Location"
        inputProps={{ 'aria-label': 'search doctors by location' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton> 
                </div>
                <div style={{marginTop:'50px'}}>
                    <Typography variant="h4">
                        Lorem ipsum dolor sit amet,consec-
                    </Typography>
                </div>
                <div style={{marginTop:'10px'}}>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consecutetur Adipscing elit,
                    </Typography>
                </div>

                <div style={{marginTop:'50px'}}>
                    <center style={{display:'inline-flex'}}>
                        <div>
                        <Avatar style={{height:'120px',width:'120px'}}>

</Avatar>
<Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consecutetur Adipscing elit,
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'blue'}}>
                        Consult Now
                    </Typography>

                        </div>
                        <div style={{marginLeft:'20px'}}>
                        <Avatar style={{height:'120px',width:'120px'}}>

</Avatar>
<Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consecutetur Adipscing elit,
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'blue'}}>
                        Consult Now
                    </Typography>

                        </div>

                        <div style={{marginLeft:'20px'}}>
                        <Avatar style={{height:'120px',width:'120px'}}>

</Avatar>
<Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consecutetur Adipscing elit,
                    </Typography>
                    <Typography variant="subtitle1" style={{color:'blue'}}>
                        Consult Now
                    </Typography>

                        </div>

                       
                    </center>
                </div>
                <Typography style={{marginTop:'20px'}}>
                    Browse through all
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item md={12}>
                <div style={{marginTop:'40px'}}>
                    <center style={{display:'inline-flex'}}>
                        <div>
                    <Card style={{maxWidth:'340px'}}>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
                    <Card style={{maxWidth:'340px'}}>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
                    <Card style={{maxWidth:'340px'}}>
      <CardActionArea>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
                    </center>
                </div>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item md={12} style={{backgroundColor:'blue',height:'150px',marginTop:'40px',color:'white'}}>
                Footer
                Logo
                pictures
                
            </Grid>
        </Grid>
    </div> );
}
 
export default Homepage;