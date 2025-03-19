import React, { Component } from "react";
import { Route } from "react-router-dom";
import AddBook from "./AddBook";
import BooksList from "./BooksList";
import EditBook from "./EditBook";
class JLCBody extends Component {
render() {
	return (
	<div>
	<Route path="/" component={BooksList} exact/>
	<Route path="/add-book" component={AddBook} exact/>
	<Route path="/edit-book/:mybookId" component={EditBook} exact/>
	</div>
	);
}
}
export default JLCBody;
