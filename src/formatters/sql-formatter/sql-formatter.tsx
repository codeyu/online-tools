import * as React from 'react';

import './sql-formatter.css';

export  class AppSqlFormatter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    window.console.log('test');
  }

  public render() {
    return (
      <div>
        this is sql
      </div>
    );
  }
}
