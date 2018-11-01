import React, { Component } from 'react';


class Search extends Component {

	constructor(){
		super();
		this.state = {
			query: ''
		}
	}

	handleInput = (e) => {
			this.setState({
				[e.currentTarget.name]: e.currentTarget.value
			})
	}

	handleSubmit =  (e) => {
			e.preventDefault();
			// Here is where we send the search query UP by calling Search.props
			this.props.handleSearch(this.state.query, true); 
			console.log(`this.state.query from handleSubmit(): `, this.state.query);
			console.log(`this.state.query from handleSubmit(): `, typeof this.state.query);
	}

  render(){
      return(
      	<form>
      		<h1>Find a gif!</h1>
					<input onChange={this.handleInput} type="text" name="query" placeholder="Search..." value={this.state.query} />
					<button onClick={this.handleSubmit}>Submit</button>
      	</form>
      )
  }
}

export default Search;
