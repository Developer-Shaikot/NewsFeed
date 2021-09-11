import React, { useEffect, useState } from 'react';
import './Vertical.css';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import img from './../../images/Aku.jpg';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import VerticalNews from '../VerticalNews/VerticalNews';
import FeedBackForm from '../FeedBackForm/FeedBackForm';





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Vertical(props) {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  

  function closeModal() {
    setIsOpen(false);
  }


const [vnews, setVnews] = useState([]);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setVnews(data))
}, [])

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div  className="bg">
      <div className={classes.toolbar} />
      <img style={{width: '100px', borderRadius:'50px'}} src={img} alt=""/><h5>Hello!! Reader</h5>
      <p>Here is your News...</p>
      <Divider />
      <div  className="Toggle">
      <h6>View Toggle</h6>
      <br />
      <Link className="Vertical" to={`/Vertical`}><VerticalSplitIcon/></Link> <Link className="Horizontal" to={`/Horizontal`}>
      <HorizontalSplitIcon/></Link> 
      </div>
      <br />
      <br />
      <br />
      <div  className="Feedback">
      <h3>Have A Feedback</h3>
      <br />
      <Button  onClick={openModal} variant="contained" color="secondary">Click Here</Button>
      <FeedBackForm modalIsOpen={modalIsOpen} closeModal={closeModal}></FeedBackForm>
      <br />
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography >
         <div className="row d-flex align-items-center">
           <h1 className="App">News-{vnews.length}</h1>
           {
             vnews.map(vnews => <VerticalNews  vnews={vnews}></VerticalNews>)
           }
         </div>
        </Typography>
      </main>
    </div>
  );
}

Vertical.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Vertical;