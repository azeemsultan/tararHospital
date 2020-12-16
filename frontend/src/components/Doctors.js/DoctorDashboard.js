import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AcceptApp from './acceptAppointment';
import AcceptCon from './acceptConsult';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Avatar } from '@material-ui/core';
import * as doctorService from '../../Axios-Actions/doctorService';
import * as consultService from '../../Axios-Actions/consultService';
import img from '../../assets/img/doc.png'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  table: {
    minWidth: 700,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function DocDashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [cards, setCard] = React.useState([]);
  const [cardsc, setCardc] = React.useState([]);
  const [d , setD] = React.useState([]);

  React.useEffect(() => {
    doctorService.GetAppointment()
    .then((result) => {setCard(result.data)});
    consultService.GetConsult()
    .then((result) => {setCardc(result.data)});
    doctorService.GetDoctor()
    .then((result) => {setD(result.data)});   
},[]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <br/>
        <center>
        <Avatar style={{width:'150px',height:'150px'}}>
          <img src={img} style={{height:'150px',width:'150px'}} />
        </Avatar>
        <br/>
        
        <Typography variant="h6">
            Cardiologist
        </Typography>

        <Typography variant="h6" color="textSecondary">
            {d.firstname} {d.lastname}
        </Typography>
        </center>
        <br/>
        <Divider style={{marginBottom:'20px'}}/>
        <List>Payments</List>
        <Divider />
        <List>
            Location
        </List>
        <Divider/>
        <List>Settings</List>
        <Divider />
        <List>
            Etc
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                  <center>
                      <br/>
                      <Typography variant="h6">Appoint Requests</Typography>
                  </center>
                  <div>
                    <center>
              <AcceptApp/>
              </center>
              </div>
              <br/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper>
                  <center>
                      <br/>
                      <Typography variant="h6">Consultation Requests</Typography>
                  </center>
                  <div>
                    <center>
              <AcceptCon/>
              </center>
              </div>
              <br/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
        
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
               <Typography variant="h6">Appointments</Typography>

          <br/>

            <TableContainer component={Paper}>
   <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor:'#336bd4'}}>Appointment ID</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#336bd4'}} align="right">Customer Email</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#336bd4'}} align="right">Time&nbsp;</StyledTableCell>
            <StyledTableCell  style={{backgroundColor:'#336bd4'}}align="right">Date&nbsp;</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#336bd4'}} align="right">Status&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((row) => (( (row.status==="accepted")||(row.status==="rejected"))?(
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.customeremail}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ):null
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<br/>
    <Typography variant="h6">Consultations</Typography>

<br/>

  <TableContainer component={Paper} >
<Table className={classes.table} aria-label="customized table"  >
<TableHead >
<TableRow >
  <StyledTableCell  >Appointment ID</StyledTableCell>
  <StyledTableCell align="right">Customer Email</StyledTableCell>
  <StyledTableCell align="right">Time&nbsp;</StyledTableCell>
  <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
  <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
</TableRow>
</TableHead>
<TableBody>
{cardsc.map((row) => (( (row.status==="accepted")||(row.status==="rejected"))?(
  <StyledTableRow key={row.name}>
    <StyledTableCell component="th" scope="row">
      {row._id}
    </StyledTableCell>
    <StyledTableCell align="right">{row.customeremail}</StyledTableCell>
    <StyledTableCell align="right">{row.time}</StyledTableCell>
    <StyledTableCell align="right">{row.date}</StyledTableCell>
    <StyledTableCell align="right">{row.status}</StyledTableCell>
  </StyledTableRow>
):null
))}
</TableBody>
</Table>
</TableContainer>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}