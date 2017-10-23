// Include React 
var React = require('react');

// This is the form component. 
var Form = React.createClass({

	// Set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			searchTerm: "",
			startDate: "",
			endDate: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Create syntax to capture any change in text to the query terms (pre-search).
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// When a user submits... 
	handleClick: function(){

		console.log("CLICK");
		// console.log(this.state.searchTerm);
		// console.log(this.props.setTerm);
		
		// Set the parent to have the search term
		this.props.setTerm(this.state.searchTerm, this.state.startDate, this.state.endDate);

	},

	// Here we render the function
	render: function(){


		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>

								{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
									Also note how each has an onChange event associated with our handleChange event. 
								*/}
								<input type="text" className="form-control text-center" id="searchTerm" onChange= {this.handleChange} required/>
								<br />
								<h4 className=""><strong>Start Date</strong></h4>
								<input type="text" className="form-control text-center" id="startDate" onChange= {this.handleChange} required/>
								<p>Format: YYYYMMDD</p>
								<br />
								<h4 className=""><strong>End Date</strong></h4>
								<input type="text" className="form-control text-center" id="endDate" onChange= {this.handleChange} required/>
								<p>Format: YYYYMMDD</p>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>
				



		)
	}
});

// Export the component back for use in other files
module.exports = Form;