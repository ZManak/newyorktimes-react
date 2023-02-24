import React, { Component } from "react";
import { TextField } from '@mui/material';
import { Button } from "@mui/material";

import { userContext } from "../../../context/userContext";

class Home extends Component {
  
  static contextType = userContext;

  constructor(props){
    super(props);
    
    this.name = React.createRef();
  }

  handleClick = () => {
    const {getForm} = this.context;

    getForm(this.name.current.value)
    alert("Welcome!")
  }

  render() {
    return (
      <section>
        <TextField id="outlined-basic" label="User" variant="outlined" inputRef={this.name} />
        <br />
        <Button variant="contained" onClick={this.handleClick}>LOGIN</Button>
      </section>
    )
  }
}

export default Home;
