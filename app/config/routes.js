// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Search = require('../components/Children/Search'); 
var Saved = require('../components/Children/Saved'); 
var Results = require('../components/Children/Results'); 

// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Info or Chat show the appropriate component*/}
		<Route path='search' component={Search} />
		<Route path='saved' component={Saved} />
		<Route path='results' component={Results} />


		{/*If user selects any other path... we get the Info Route*/}
		<IndexRoute component={Search} />

	</Route>


);