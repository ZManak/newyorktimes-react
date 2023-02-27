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
      <section className="home">
        <article className="login">
          <h2>LogIn</h2>        
          <TextField id="login" label="User" variant="outlined" inputRef={this.name} />
          <Button variant="contained" onClick={this.handleClick}>LOGIN</Button>
        </article>
        <article className="homeTitle">
          <h2>What</h2>
          <h3>When</h3>
          <h4>Where</h4>
          <h5>Who</h5>
          <h6>Why?...</h6>
        </article>
      </section>
    )
  }
}

export default Home;
