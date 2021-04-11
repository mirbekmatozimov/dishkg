import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './Logo'
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages";
import About from "../pages/about";
import Events from "../pages/events";
import AnnualReport from "../pages/annual";
import Teams from "../pages/team";
import Blogs from "../pages/blogs";
import SignUp from "../pages/signup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar:{
      boxShadow: "none",
			backgroundColor: "#ededed",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
            <Logo/>
              <Navbar />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/annual" component={AnnualReport} />
          <Route path="/team" component={Teams} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}
