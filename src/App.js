import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import AddBook from './AddBook'
import BookList from './BookList'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    const test1 = BooksAPI.getAll();
    console.log(test1);
    test1.then((books) => {
      this.setState({books})
    });
    //console.log(this.state.books)
  }

  UpdateCategory = (book, shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({books})
      })
    })
    //console.log(test)
  }




  render() {
    return (
      <div className="app">
        <Route exact path='/add' render={() => 
          <AddBook temp={this.UpdateCategory} temp2={this.state.books}/>
        }>
        </Route>
        <Route exact path='/' render={() => 
          <BookList books={this.state.books} temp={this.UpdateCategory}/>
        }>
        </Route>
      </div>
    )
  }
}

export default BooksApp
