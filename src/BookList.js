import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Li from './Li'

class BookList extends Component{
	render(){
		const {books} = this.props;
		//console.log(books)
		let c_read = books.filter((book) => book.shelf === 'currentlyReading');
		let w_read = books.filter((book) => book.shelf === 'wantToRead');
		let read = books.filter((book) => book.shelf === 'read');


		return(
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                    	{c_read.map((book) => (
	                    		<Li bookTo={book} key={book.id} onUpdateCategory={this.props.temp}/>
	                    	))}
	                    </ol>
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Want to Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                    	{w_read.map((book) => (
	                    		<Li bookTo={book} key={book.id} onUpdateCategory={this.props.temp}/>
	                    	))}	                    
	                    </ol>
	                  </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Read</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                    	{read.map((book) => (
	                    		<Li bookTo={book} key={book.id} onUpdateCategory={this.props.temp}/>
	                    	))}
	                    </ol>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className="open-search">
	              <Link to='/add'>Add a book</Link>
	            </div>
	        </div>
		)
	}
}

export default BookList;