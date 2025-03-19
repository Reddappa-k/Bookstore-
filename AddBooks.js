mport React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MyTextInput from './MyTextInput'; 
import axios from 'axios'; 
class AddBook extends Component { 
 state = { 
 bookId: 0, 
 bookName: '', 
 author: '', 
 price: 0, 
 category: '', 
 publications: '', 
 errors: {} 
 } 
 onChangeHandler = (event) => { 
 console.log("onChangeHandler"); 
 this.setState({ 
 [event.target.name]: event.target.value 
 }); 
 } 
 onSubmitHandler = (event) => { 
 event.preventDefault(); 
 const { bookName, author, price, category, publications } = this.state; 
 console.log("onSubmitHandler"); 
 console.log(this.state); 
 //Do the Validations 
 if (bookName === '') { 
 this.setState({ 
 errors: { 
 bookName: "Book Name is Required" 
 } 
 }); 
 return; 
 }
	if (author === '') { 
 this.setState({ 
 errors: { 
 author: "Author is Required" 
 } 
 }); 
 return; 
 } 
 if (price === '') { 
 this.setState({ 
 errors: { 
 price: "Price is Required" 
 } 
 }); 
 return; 
 } 
 if (category === '') { 
 this.setState({ 
 errors: { 
 category: "Category is Required" 
 } 
 }); 
 return; 
 } 
 if (publications === '') { 
 this.setState({ 
 errors: { 
 pub: "Publications is Required" 
 } 
 }); 
 return; 
 } 
 //Make Call to Server 
 const URL1 = http://localhost:5500/myapi/maxId; 
 console.log(12345, URL1); 
 axios.get(URL1).then((myresponse) => { 
 console.log(12346, myresponse.data[0].bookId); 
 this.setState({ 
 bookId: myresponse.data[0].bookId + 1, 
 }); 
 console.log(12347, this.state); 
 const URL2 = "http://localhost:5500/myapi/mybooks"; 
 axios.post(URL2, this.state)
 then(myresponse => { 
 console.log(1, myresponse.data); 
 //Form Reset 
 this.setState({ 
 mybook: {}, 
 }); 
 this.props.history.push("/"); 
 }).catch(myerror => { 
 console.log(2, myerror); 
 }); 
 }); 
 } 
 render() { 
 const { bookName, author, price, category, publications } = this.state; 
 return ( 
 <div className="card-body container col-md-6"> 
 <h2 className="text-center"> Add Book Form </h2> 
 <form onSubmit={this.onSubmitHandler}> 
 <MyTextInput myname="bookName" 
 mylabel="Book Name" 
 myvalue={bookName} 
 myerror={this.state.errors.bookName} 
 myOnChange={this.onChangeHandler} /> 
 <MyTextInput myname="author" 
 mylabel="Author" 
 myvalue={author} 
 myerror={this.state.errors.author} 
 myOnChange={this.onChangeHandler} /> 
 <MyTextInput myname="price" 
 mylabel="Price" 
 myvalue={price} 
 myerror={this.state.errors.price} 
 myOnChange={this.onChangeHandler} /> 
 <MyTextInput myname="category" 
 mylabel="Category" 
 myvalue={category}
 myerror={this.state.errors.category} 
 myOnChange={this.onChangeHandler} /> 
 <MyTextInput myname="publications" 
 mylabel="Publications" 
 myvalue={publications} 
 myerror={this.state.errors.publications} 
 myOnChange={this.onChangeHandler} /> 
 <input type="submit" 
 value="Add Book Now" 
 className="btn btn-primary btn-lg" /> 
 </form> 
 </div> 
 ); 
 } 
} 
export default AddBook;
