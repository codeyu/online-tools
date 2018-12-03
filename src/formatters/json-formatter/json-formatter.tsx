import * as React from 'react';

import * as JSONEditor  from 'jsoneditor'

import './json-formatter.css';
import { JSONFormatterProps } from './json-formatter.dto';
export  class AppJsonFormatter extends React.Component {
  public container: HTMLElement;
  public jsoneditor: JSONEditor;
  public props: JSONFormatterProps;

  constructor(props: any) {
    super(props);

  }
  public componentDidMount () {
    const options = {
      mode: 'tree',
      onChangeJSON: this.props.onChangeJSON
    };
    this.jsoneditor = new JSONEditor(this.container, options);
    this.jsoneditor.set(this.props.json);
  }

  public componentWillUnmount () {
    if (this.jsoneditor) {
      this.jsoneditor.destroy();
    }
  }

  public componentWillUpdate(nextProps, nextState) {
    this.jsoneditor.update(nextProps.json);
  }

  public render() {
    return (
        <div className="jsoneditor-react-container" ref={elem => this.container = elem} />
    );
  }
}
