import React, {Component} from 'react'

class Li extends Component{

	shelf:'';

	shelfD = () => {
		if(this.props.bookTo.shelf){
			this.shelf = this.props.bookTo.shelf
		}
		else{
			this.shelf = "none1";
		}

		if(this.props.books){
			//console.log('lalal')
			const temp = this.props.books.filter(book => 
				book.id === this.props.bookTo.id
			);
			//console.log(temp.length);
			if(temp.length >= 1){
				//console.log('lalala')
				this.shelf = temp[0].shelf;
			}
		}
		//console.log('test')
	}

	render(){
		const {bookTo} = this.props
		this.shelfD();
		//console.log(this.shelf)
		return(
		    <li key={bookTo.id}>
		        <div className="book">
		          <div className="book-top">
		            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookTo.imageLinks.thumbnail})` }}></div>
		            <div className="book-shelf-changer">
		              <select onChange={(event) => this.props.onUpdateCategory(bookTo, event.target.value)} value={this.shelf}>
		                <option value="none" disabled>Move to...</option>
		                <option value="currentlyReading">Currently Reading</option>
		                <option value="wantToRead">Want to Read</option>
		                <option value="read">Read</option>
		                <option value="none1">None</option>
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