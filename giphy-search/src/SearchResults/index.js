import React, { Component } from 'react';
import { List, Segment, Header } from 'semantic-ui-react';

class SearchResults extends Component {

    render(){
    	const searchList = this.props.searchResults.map((oneResult, i) => {
    		return(
    			<Segment inverted color='black' style={{maxHeight: '600px', paddingBottom: '55px'}} key={oneResult.id}>
    				<Header as='h5' style={{padding: 0}}>{oneResult.title}</Header><br/><br/>
    				<iframe src={oneResult.embed_url} width={oneResult.images.original_mp4.width} height={oneResult.images.original_mp4.height} frameBorder="2" className="giphy-embed" title={oneResult.title}></iframe>
    			</Segment>
    		)
    	})
        return(
            <List>{searchList}</List>
        )
    }
}
export default SearchResults;
