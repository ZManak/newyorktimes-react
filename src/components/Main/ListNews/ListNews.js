import React, { Component } from "react";

class ListNews extends Component {
  constructor(props){
    super(props)
    this.state = {
      news: this.props.news
    }
  }

  render() {
    return (
    <section className="list-news">
      
    </section>
    )
  }
}

export default ListNews;
