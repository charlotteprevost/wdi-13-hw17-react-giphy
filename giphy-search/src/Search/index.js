import React, { Component } from 'react';
import { Header, Button, Form, Grid, Segment } from 'semantic-ui-react';


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
	}

  render(){
    return(
      <Grid container columns={1} textAlign='center' verticalAlign='middle' style={{height: '100%'}}>
        <Grid.Column style={{maxWidth: '600px'}} >
          <Segment inverted color='black' style={{width: '575px'}}>
          	<Header as='h1' color='red'>Find a gif!</Header>
		      	<Form>
							<Form.Input onChange={this.handleInput} type="text" name="query" placeholder="Search..." value={this.state.query} />
							<Button onClick={this.handleSubmit}>Submit</Button>
		      	</Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Search;
