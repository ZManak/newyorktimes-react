import React, { Component } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

class Form extends Component {
  constructor(props) {
    super(props)

    this.title = React.createRef();
  }

  render() {
    return (<section className="create-new">
      <h1>What, when, where, who, why?</h1>
      <TextField id="outlined-basic" label="title" variant="outlined" inputRef={this.title} />
    </section>);
  }
}

export default Form;
