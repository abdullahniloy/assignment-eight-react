import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
  const { title,id } = props.post;
  
  

  const classes = useStyles();


  const postStyle = {
    border: '1px solid purple',
    margin:'30px', 
    padding: '10px',
    borderRadius: '20px',
    backgroundColor:'yellow',
    textDecoration: 'none'
    
  }

  return (
    <div style ={postStyle}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <br/>
            <Typography variant="body2" color="textSecondary" component="p">
           
              
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
        <br/>
          {/* <Button size="small" color="primary">
            See More{id }

        </Button> */}
        <p><Link to={`/post/${id}`}>
        <Button variant="contained" color="primary">
      See More
      </Button>
          </Link></p>
          <br/>
      
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;