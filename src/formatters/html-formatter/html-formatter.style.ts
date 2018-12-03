export const styles = theme => ({
  root: {
    height: '100%',
    flexGrow: 1
  },
  grid: {
    height: '100%'
  },
  textField: {
    height: '100%',
    '& > div': {
      height: '100%',
      '& > div': {
        height: '100%',

        '& > textarea:last-child': {
          height: '100%!important'
        }
      }
    }
  }
});
