import * as React from 'react';

import './xml-formatter.css';

export class AppXmlFormatter extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    window.console.log('test');
  }

  public render() {
    return (
      <div>
        this is xml
      </div>
    );
  }
}
