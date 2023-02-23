import React, { Component } from "react";
import { TextField } from '@mui/material';
import { Button } from "@mui/material";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }

    this.inputText = React.createRef();
  }

  

  handleClick =() => {
    this.setState({username: this.inputText.current.value})
  }

  render() {
    return (
      <section>
        <TextField id="outlined-basic" label="User" variant="outlined" inputRef={this.inputText} />
        <br />
        <Button variant="contained" onClick={this.handleClick}>LOGIN</Button>
      </section>
    )
  }
}

export default Home;
