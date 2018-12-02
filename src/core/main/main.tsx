import * as React from 'react';
import { Redirect, Route, Switch  } from 'react-router-dom';

import './main.css';

import { Routes } from './main.conf';

window.console.log(Routes);

export class AppMain extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Switch>
        {
          Routes.map(route => {
            return (
              <Route path={route.path} exact={true} component={route.component} key={route.path}/>
            )
          })
        }
        <Redirect from="/" to="/home"/>
        <Route path="*" />
      </Switch>
    );
  }
}
