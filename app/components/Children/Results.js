// Include React 
var React = require('react');

var Results = React.createClass({
	saveArticle: function(url, main){
		this.props.setArticle(url, main);
	},

	// Render the component
	render: function(){
		var that = this;

		return(

			<div className="container">

					<div className="row">

						<div className="col-lg-12">
							
							<div className="panel panel-default">
								<div className="panel-heading">
									<h3 className="panel-title">Results</h3>
								</div>
								<div className="panel-body">
									{this.props.results.map(function(search, i)
										{
											console.log(search.web_url);
											return <div><span>{i + 1}. </span><a key={i} href={search.web_url}>{search.headline.main}</a> <button className="btn btn-primary" article_url={search.web_url} article_title={search.headline.main} onClick={that.saveArticle.bind(null, search.web_url, search.headline.main)}>Save</button><br /><br /></div>
										})}
								</div>
							</div>

						</div>

					</div>
				</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Results;