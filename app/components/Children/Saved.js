// Include React 
var React = require('react');

var Saved = React.createClass({
	removeArticle: function(_id){
		this.props.deleteArticle(_id);
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
									<h3 className="panel-title">Saved Articles</h3>
								</div>
								<div className="panel-body">
									{this.props.history.map(function(articles, i){
										return <div><span>{i + 1}. </span><a key={i} href={articles.url}>{articles.title}</a> <button className="btn btn-primary" onClick={that.removeArticle.bind(null, articles._id)}>Delete</button><br /><br /></div>
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
module.exports = Saved;