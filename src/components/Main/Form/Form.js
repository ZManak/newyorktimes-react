import React, { Component } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

class Form extends Component {
  constructor(props) {
    super(props)

    this.title = React.createRef();
    this.abstract = React.createRef();
    this.url = React.createRef();
  }

  handleClick = () => {
    this.props.setLocal(this.title.current.value, this.abstract.current.value, this.url.current.value);
    alert("Article published")
  }

  render() {
    return (<section className="createNew">
      <h1>What, when, where, who, why?</h1>
      <TextField id="localTitle" label="Title" variant="outlined" inputRef={this.title} />
      <TextField id="localAbstract" label="Abstract" variant="outlined" multiline rows={4} inputRef={this.abstract} />
      <TextField id="localUrl" label="Url" variant="outlined" inputRef={this.url} />
      <Button onClick={this.handleClick}>PUBLISH</Button>
    </section>);
  }
}

export default Form;
