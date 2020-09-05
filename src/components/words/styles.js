import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
   root: {
      minWidth: 275,
      display:"flex",
      flexDirection:"column",
      textAlign:"center"
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
      fontSize: 14,
   },
   item:{
      margin: '0, auto'
   },
   pos: {
      marginBottom: 12,
   },
});