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
      apiNews: []
  }
  }

  setLocalNews = (title, abstract, url) => {
    const newLocal = {title: title, abstract: abstract, url: url};
    this.setState({localNews: [newLocal, ...this.state.localNews] })
  }

  async componentDidMount(){
    const resp = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key='+process.env.REACT_APP_API_KEY);
    const data = await resp.json();
    this.setState({apiNews: [...data.results]})
  }

  render() {
    return (
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Form setLocal={this.setLocalNews} />} />
        <Route path="/news" element={<ListNews apiData={this.state.apiNews} localData={this.state.localNews} />} />
      </Routes>
    </main>
    )
  }
}

export default Main;
