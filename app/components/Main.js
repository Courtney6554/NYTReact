// Include React 
var React = require('react');

// Here we include all of the sub-components
var Search = require('./Children/Search');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

// Helper Function
var helpers = require('./utils/helpers.js');

// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			searchTerm: "",
			startDate:"",
			endDate:"",
			results: "",
			url:"",
			mainHeadline: "",
			removeId: "",
			history: [] /*Note how we added in this history state variable*/
		}
	},	

	// This function allows childrens to update the parent.
	setTerm: function(term, start, end){
		this.setState({
			searchTerm: term,
			startDate: start,
			endDate: end

		})
	},

	setArticle: function(articleUrl, headline){
		this.setState({
			url: articleUrl,
			mainHeadline: headline
		})
	},

	deleteArticle: function(_id){
		this.setState({
			removeId: _id
		})
	},

	// If the component changes (i.e. if a search is entered)... 
	componentDidUpdate: function(prevProps, prevState){

		if(prevState.searchTerm != this.state.searchTerm){
			console.log("UPDATED");

			// Run the query for the address
			helpers.runQuery(this.state.searchTerm, this.state.startDate, this.state.endDate)
				.then(function(data){
					if (data != this.state.results)
					{
						console.log("Articles", data);

						this.setState({
							results: data
						})

						// After we've received the result... then post the search term to our history. 
						
						
					}
				}.bind(this))
				
			}
		if (prevState.mainHeadline != this.state.mainHeadline){
			helpers.postArticle(this.state.url, this.state.mainHeadline)
							.then(function(data){
								console.log("Updated!");

						// 		// After we've done the post... then get the updated history
								helpers.getArticle()
									.then(function(response){
										console.log("Current Saved Articles", response.data);
										if (response != this.state.history){
											console.log ("History", response.data);

											this.setState({
												history: response.data
											})
										}
									}.bind(this))	
							}.bind(this)
							)
		}
		if (prevState.removeId != this.state.removeId){
			helpers.removeArticle(this.state.removeId)
							.then(function(data){
								console.log("Updated!");

						// 		// After we've done the post... then get the updated history
								helpers.getArticle()
									.then(function(response){
										console.log("Current Saved Articles", response.data);
										if (response != this.state.history){
											console.log ("History", response.data);

											this.setState({
												history: response.data
											})
										}
									}.bind(this))	
							}.bind(this)
							)
		}
	},

	// The moment the page renders get the History
	componentDidMount: function(){

		// Get the latest history.
		helpers.getArticle()
			.then(function(response){
				if (response != this.state.history){
					console.log ("History", response.data);

					this.setState({
						history: response.data
					})
				}
			}.bind(this))
	},

	// Here we render the function
	render: function(){
		var that = this;
		var childrenWithProps = React.Children.map(this.props.children, function(child) {
            return React.cloneElement(child, {setTerm: that.setTerm, results: that.state.results, history: that.state.history, setArticle: that.setArticle, deleteArticle: that.deleteArticle});
        });
        console.log(this.setTerm);

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1>New York Times Article Search</h1>
						<p><em>Search for articles and save your favorites for later</em></p>
						<a href="#/search"><button className="btn btn-default">Search</button></a>
						<a href="#/saved"><button className="btn btn-default">Saved Articles</button></a>
						<a href="#/results"><button className="btn btn-default">Results</button></a>
					</div>

					<div className="container">

						{/*Added this.props.children to dump all of the child components into place*/}
						{childrenWithProps}

					</div>
				</div>

			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Main;