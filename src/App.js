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
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/add' render={() => 
          <AddBook/>
        }>
        </Route>
        <Route exact path='/' render={() => 
          <BookList books={this.state.books}/>
        }>
        </Route>
      </div>
    )
  }
}

export default BooksApp
