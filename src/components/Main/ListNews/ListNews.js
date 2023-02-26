import React, { Component } from "react";
import Cards from "./Card"

class ListNews extends Component {
   constructor(props){
    super(props)
    const allNews = [...this.props.apiData, ...this.props.localData];
    this.state = {
      newsList: allNews.slice(10,)
    }
   }

   deleteNew = (i) => {
    const remainingNews = this.state.newsList.filter((article, j) => i !== j);
    this.setState({newsList: remainingNews}) 
   }
  render() {
    return (
    <section className="listNews">
      {this.state.newsList.map((data, i) => <Cards new={data} key={data.abstract} delete={() => this.deleteNew(i)} /> )}
    </section>
    )
  }
}

export default ListNews;
