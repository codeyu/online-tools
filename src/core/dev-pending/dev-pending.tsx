import * as React from 'react';

import './dev-pending.css';

export class AppDevPending extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <article className="app-dev-pending">
        <section className="content">
          Pending
        </section>
      </article>
    );
  }
}
