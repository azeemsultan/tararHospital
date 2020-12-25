import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img/doc.png';
import Grid from '@material-ui/core/Grid';
import { Button, Container, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as searchService from "../../Axios-Actions/searchService";
const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Searchdoctor() {
  const classes = useStyles();
 
  const [se,setSe]= useState('');
  const [p,setP]= useState('');
  const [cards,setCards] =useState([]);
  const searchbyemail=(se)=>{

    searchService.searchbyemail(se)
    .then((result) => {setCards(result.data)});

  }

  const searchbypmdc=(p)=>{

    searchService.searchbypmdc(p)
    .then((result) => {setCards(result.data)});

  }
  return (
    <React.Fragment>
      <Container maxWidth="sm">
    <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'white'}}>Search Doctor by Speciality</Typography>
    <TextField
    onChange={(e)=>{setSe(e.target.value)}}
    label="Enter Doctors Speciality"
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="speciality"
    name="speciality"
    autoComplete="speciality"
    autoFocus
    >
    </TextField>
    <Button               fullWidth
              variant="contained"
              color="primary"
            onClick={(e)=>{searchbyemail(se)}}>Search</Button>
 
             <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'white'}}>Search Doctor by Location </Typography>
    <TextField
    onChange={(e)=>{setP(e.target.value)}}
    label="Enter Doctors Location"
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="location"
    name="location"
    autoComplete="location"
    autoFocus
    >
    </TextField>
    <Button               fullWidth
              variant="contained"
              color="primary"
            onClick={(e)=>{searchbypmdc(p)}}>Search</Button>
 
            <Typography variant="h6" style={{marginTop:'20px',backgroundColor:'#336bd4',color:'black'}}>Results</Typography>
            <Grid>
    {cards.map((card,key) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <br/>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                  
                    title="Image title"
                  >
                      <img  style={{maxWidth:"300px",maxHeight:"300px"}}src={card.imageURL||img}></img>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" style={{color:'#336bd4'}}>
                      Doctor
                    </Typography>
                    <Typography variant="h6"  color="textSecondary">
                    {card.firstname}      {card.lastname} 
                    </Typography>
                
                    <Typography variant="h6"  color="textSecondary">
        {card.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            </Grid>
            </Container> 
    </React.Fragment>
    
  );
}