import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Li from './Li'
import * as BooksAPI from './BooksAPI'

class AddBook extends Component{
  state = {
    result:[]
  }
  searchBook = (str) => {
    BooksAPI.search(str).then(result => {
      console.log(result)
      this.setState({result})
    })
  }

	render(){
		return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  onChange={(event) => {this.searchBook(event.target.value)}}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.result && this.state.result.map(book => <Li bookTo={book} key={book.id}/>)}
              </ol>
            </div>
          </div>			
		)
	}
}

export default AddBook;