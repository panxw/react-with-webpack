import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
		render(){
			return <div><h1>Hello World: {this.props.name}!</h1></div>;
		}
}

var start = new Date().getTime();
var i=0;
var name = "John";

setInterval(function() {
	i++;
	ReactDOM.render(
	   <HelloWorld name={name +" "+ i} />,
	  document.getElementById('container')
	);
}, 50);


