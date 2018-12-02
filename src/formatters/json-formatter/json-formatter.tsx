import * as React from 'react';

import './json-formatter.css';

export  class AppJsonFormatter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    window.console.log('test');
  }

  public render() {
    return (
      <div>
        this is json
      </div>
    );
  }
}
