import React, { Component } from "react";
import { Routes, Route, } from "react-router-dom";


import Home from "./Home/Home";
import Form from "./Form/Form";
import ListNews from "./ListNews/ListNews"


class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      localNews: [],
      news: []
  }
  }

  async componentDidMount(){
    const resp = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key='+process.env.REACT_APP_API_KEY);
    const data = await resp.json();
    const allNews = [...data.results, ...this.state.localNews]
    this.setState({news: allNews.slice(2,10)})
  }

  render() {
    return (
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/news" element={<ListNews data={this.state.news} />} />
      </Routes>
    </main>
    )
  }
}

export default Main;
