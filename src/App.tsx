import * as React from 'react';

import {
  AppBar, CssBaseline, Drawer, Hidden,
  IconButton, Toolbar, Typography, withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { HashRouter as Router } from 'react-router-dom';


import { AppMain, AppSideNav, RouteTitleContext } from './core';

import { DtoAppProps, DtoAppState } from './app.dto';

import './app.css';

const drawerWidth = 300;
const styles = (theme: any) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: 80
  },
});

// import logo from './logo.svg';

class App extends React.Component {
  public props: DtoAppProps;
  public state: DtoAppState;

  constructor(props: any) {
    super(props);

    this.switchCurrentRoute = this.switchCurrentRoute.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);

    this.state = {
      mobileOpen: false,
      routeTitle: '',
      switchRouteTitle: this.switchCurrentRoute
    }
  }

  public switchCurrentRoute(name: string) {
    this.setState({
      routeTitle: name
    });
  }

  public handleDrawerToggle() {
    this.setState((state: DtoAppState) => ({ mobileOpen: !state.mobileOpen }));
  };

  public render() {
    const { classes, theme } = this.props;
    return (
      <RouteTitleContext.Provider value={this.state}>
        <Router>
          <div className="app">
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap={true}>
                  {this.state.routeTitle}
                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
              <Hidden smUp={true} implementation="css">
                <Drawer
                  container={this.props.container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {<AppSideNav />}
                </Drawer>
              </Hidden>

              <Hidden xsDown={true} implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant="permanent"
                  open={true}
                >
                  {<AppSideNav />}
                </Drawer>
              </Hidden>
            </nav>
            <main className={classes.content}>
              <AppMain />
            </main>
          </div>
        </Router>
      </RouteTitleContext.Provider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
