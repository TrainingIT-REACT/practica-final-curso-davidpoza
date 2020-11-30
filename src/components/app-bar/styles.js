import { makeStyles } from '@material-ui/core/styles';
import config from '../../config';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#121212',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${config.drawerWidth}px)`,
      marginLeft: config.drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
