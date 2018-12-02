import * as React from 'react';

import './batch-formatter.css';

export  class AppBatchFormatter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    window.console.log('test');
  }

  public render() {
    return (
      <div>
        this is batch
      </div>
    );
  }
}
