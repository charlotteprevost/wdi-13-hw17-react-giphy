import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import SearchResults from './SearchResults';
// const apiKey = '63MMoF5RDHdOpqznMQh6nF1sVdADbX6Q';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searched: false,
      query: '',
      results: []
    }
  }

  handleSearch = (query, searched) => {
      this.setState({
        searched: searched,
        query: query
      })

       this.setStateResults(query);
  }

  getGifs = async (query) => {
    try {
      const gifs = await fetch('https://api.giphy.com/v1/gifs/search?api_key=63MMoF5RDHdOpqznMQh6nF1sVdADbX6Q&q='+query+'&limit=25&offset=0&rating=G&lang=en');
      const gifJson = await gifs.json();
      return gifJson;   
    } catch(err){
      console.error(`Error: `, err);
    }
  }

  setStateResults = async (query) => {
    await this.getGifs(query).then(async (results)=>{
      try {
        await this.setState({
          results: results.data
        });        
      } catch(err){
        console.log(`Error in setStateResults .catch(err){}\n`, err);
      }
    })
  }

  render() {
    return (
      <div className="App">
       {this.state.searched ? <div><Search handleSearch={this.handleSearch}/><SearchResults searchResults={this.state.results} /></div> : <Search handleSearch={this.handleSearch}/>}
      </div>
    );
  }
}

export default App;
