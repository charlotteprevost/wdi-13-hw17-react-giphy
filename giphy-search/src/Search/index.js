import React, { Component } from 'react';


class Search extends Component {

	constructor(){
		super();
		this.state = {
			query: ''
		}
	}

	handleInput = (e) => {
			this.setState = {
				query: 
			}
	}

	handleSubmit = () => {
			e.preventDefault();
			// Here is where we send the search query UP by calling Search.props
			this.props.handleSearch(this.state.query, true); 
	}

  render(){
      return(
      	<form>
      		<h1>Find a gif!</h1>
					<input onChange={this.handleInput} type="text" name="query" placeholder="Search..." value={this.state.query} />
					<input type="submit" />
      	</form>
      )
  }
}

export default Search;
