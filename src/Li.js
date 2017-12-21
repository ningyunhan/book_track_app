import React, {Component} from 'react'

class Li extends Component{
	render(){
		const {bookTo} = this.props
		return(
		    <li key={bookTo.id}>
		        <div className="book">
		          <div className="book-top">
		            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookTo.imageLinks.thumbnail})` }}></div>
		            <div className="book-shelf-changer">
		              <select onChange={(event) => this.props.onUpdateCategory(bookTo, event.target.value)} value={bookTo.shelf}>
		                <option value="none" disabled>Move to...</option>
		                <option value="currentlyReading">Currently Reading</option>
		                <option value="wantToRead">Want to Read</option>
		                <option value="read">Read</option>
		                <option value="none">None</option>
		              </select>
		            </div>
		          </div>
		          <div className="book-title">{bookTo.title}</div>
		          {bookTo.authors && bookTo.authors.map((author) => <div className="book-authors" key={author}>{author}</div>)}			                          
		        </div>	                    	
			</li>
		)
	}
}

export default Li;