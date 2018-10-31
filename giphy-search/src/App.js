import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import SearchResults from './SearchResults';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searched: false
      query: ''
    }
  }

  handleSearch = (query, searched) => {

      this.setState({
        searched: true,
        query: query
      });
      console.log(`this.state.query: `, this.state.query);
  }

  getGifs =  async () => {
    try {
      const gif = await fetch ('https://api.giphy.com/v1/gifs/search?api_key=63MMoF5RDHdOpqznMQh6nF1sVdADbX6Q&q='+ this.state.query +'&limit=25&offset=0&rating=G&lang=en')
      const gifJson = await gif.json();
      console.log(`gifJson: `, gifJson);
      // return gifJson;   
    } catch(err){
      console.error(`Error: `, err);
    }
  }

  componentDidMount(){
    this.getGifs
    try {
      await this.state.query.push(data);

      this.setState({
        query: this.state.query
      });
      
    } catch(err){
    console.log(`Error in componentDidMount .catch(err){}\n`, err);
    }

  }

  render() {
    return (
      <div className="App">
       {this.state.searched ? <SearchResults /> : <Search handleSearch={this.handleSearch}/>}
      </div>
    );
  }
}

export default App;
