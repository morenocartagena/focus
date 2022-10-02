import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const defaultUser = 1;
const endpoint = 'http://127.0.0.1:8000/api';

const ShowBooks = () => {

  const [books, setBooks] = useState([])

  useEffect( () => {
      getBooks();
  }, [])

  const getBooks = async () => {
    const response = await axios.get(`${endpoint}/books`) 
    setBooks(response.data);
  }

  // Loan: decrease stock
  const loanBook = async (id, title, author, published_year, genre, stock) => {
    await axios.put(`${endpoint}/book/${id}`, {
      title: title,
      author: author,
      published_year: published_year,
      genre: genre,
      stock: stock - 1
    }) 

    // Save loan
    await axios.post(`${endpoint}/loan`, {
      user_id: defaultUser,
      book_id: id,
      title: title,
      quantity: 1
    }) 

    getBooks();

  }

  return (
    <div>
      {/* <div className='d-grid gap-2'>
        <Link to="/loan " className='btn btn-success btn-lg'>To check out</Link>        
      </div> */}

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published Year</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Available for check out</th>
          </tr>
        </thead>
        <tbody>
          { books.map( (book) => (
            <tr key={ book.id }>
              <td>{ book.title }</td>
              <td>{ book.author }</td>
              <td>{ book.published_year }</td>
              <td>{ book.genre }</td>
              <td>{ book.stock }</td>
              <td>
                {/* <Link to={`/checkout/${book.id}`} className='btn btn-warning'>Check out</Link> */}
                <button onClick={ () => loanBook(book.id, book.title, book.author, book.published_year , 
                  book.genre, book.stock) } className='btn btn-warning' >Check out</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </div>
  )
}

export default ShowBooks