import React, { Component } from 'react';


class SearchResults extends Component {

    render(){
    	console.log(`Searchresults: this.props.searchResults: `, this.props.searchResults);
    	const searchList = this.props.searchResults.map((oneResult, i) => {
    		console.log(`oneResult: `, oneResult);
    		return(
    			<li key={oneResult.id}>
    				{oneResult.title}<br/><br/>
    				<iframe src={oneResult.embed_url} width={oneResult.images.original_mp4.width} height={oneResult.images.original_mp4.height} frameBorder="2" className="giphy-embed"></iframe>
    			</li>
    		)
    	})
        return(
            <ul>{searchList}</ul>

        )
    }
}
export default SearchResults;
