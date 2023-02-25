import React, { Component } from "react";
import Cards from "./Card"

class ListNews extends Component {
   constructor(props){
    super(props)

    this.state = {
      newsList: this.props.data
    }
   }

  render() {
    return (
    <section className="list-news">
      {this.props.data.map(data => <Cards new={data} key={data.abstract}/> )}
    </section>
    )
  }
}

export default ListNews;
