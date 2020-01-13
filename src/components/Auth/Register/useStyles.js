import { makeStyles } from '@material-ui/core/styles';

// init styles
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 25
  },
  header: {
    fontSize: 30,
    textAlign: 'center'
  },
  form: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft: 10,
    paddingRight: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '95%'
  },
  button: {
    marginTop: 10,
    display: 'block',
    width: '100%'
  }
}));

export default useStyles;
