import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class Cards extends Component {

  render() {
    return (<Card variant='outlined' sx={{ minWidth: 275, maxWidth: 450 }}>
    <CardContent>
      <Typography variant='h5' color="text.secondary" gutterBottom>
        {this.props.new.title}
      </Typography>
      <Typography component="div">
        {this.props.new.abstract}
      </Typography>
    </CardContent>
    <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
      <Button href={this.props.new.url} target="_blank" size="small">Read More</Button>
      <Button size="small" onClick={this.props.delete}>Remove</Button>
    </CardActions>
  </Card>
  )}
}

export default Cards;
