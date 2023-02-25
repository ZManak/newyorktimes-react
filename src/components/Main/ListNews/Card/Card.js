import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';

class Cards extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (<Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant='h5' color="text.secondary" gutterBottom>
        {this.props.new.title}
      </Typography>
      <Typography component="div">
        {this.props.new.abstract}
      </Typography>
    </CardContent>
    <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
      <Button href={this.props.new.url} size="small">Read More</Button>
    </CardActions>
  </Card>
  )}
}

export default Cards;
