
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VerticalNews(props) {

    const {title, body} = props.vnews;

  const classes = useStyles();
 
    const cardStyle = {margin:'10px', padding:'10px'};
 

  return (
    <div  className="col-md-3" >
        <Card  style={cardStyle}>
      <CardHeader 
      
        action={
          <ClearIcon>
            
          </ClearIcon>
        }
        title={title}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
