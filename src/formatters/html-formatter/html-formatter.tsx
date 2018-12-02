import * as React from 'react';

import './html-formatter.css';

export  class AppHtmlFormatter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    window.console.log('test', this.props);
  }

  public render() {
    return (
      <div>
        this is html
      </div>
    );
  }
}
