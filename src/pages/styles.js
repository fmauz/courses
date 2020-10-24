import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  container: {
    marginTop: theme.spacing(10)
  }
}));

export default useStyles