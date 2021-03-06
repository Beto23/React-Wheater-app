var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');
var Examples = require('./components/Examples');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!../app/styles/app.scss')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>        
        <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);