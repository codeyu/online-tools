import * as React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import * as Pretty from 'pretty';

import './html-formatter.css';

import { HtmlFormatterProps, HtmlFormatterState } from './html-formatter.dto';
import { styles } from './html-formatter.style';

export const AppHtmlFormatter = withStyles(styles)(class extends React.Component<HtmlFormatterProps, HtmlFormatterState> {
  constructor(props: any) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      sourceStr: ''
    }
  }

  public componentDidMount(): void {
    window.console.log('test', this.props);
  }

  public onChange(evt: React.ChangeEvent<HTMLTextAreaElement>): void {
    window.console.log('this is chagne', evt, evt.target, evt.target.value);

    this.setState({
      sourceStr: evt.target.value || ''
    })
  }

  public render() {
    const str = Pretty(this.state.sourceStr);
    const { classes } = this.props;

    return (
      <form className={classNames(classes.root)} noValidate={true} autoComplete="off">
        <Grid container={true} className={classNames(classes.grid)} direction="column" spacing={24}>
          <Grid item={true} xs={12} >
            <TextField
              className={classNames(classes.textField)}
              label="输入"
              multiline={true}
              placeholder="请输入要格式化的html字符串"
              helperText="格式化前"
              fullWidth={true}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item={true} xs={12} >
            <TextField
              className={classNames(classes.textField)}
              label="输出"
              multiline={true}
              placeholder=""
              helperText="格式化后"
              fullWidth={true}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              disabled={true}
              value={str}
            />
          </Grid>
        </Grid>


      </form>
    );
  }
});
