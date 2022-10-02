import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const defaultUser = 1;
const endpoint = 'http://127.0.0.1:8000/api';

const ShowLoans = () => {

  const [loans, setLoans] = useState([])
   
  useEffect( () => {      
      getLoans();   
  }, [])

   const getLoans = async () => {
    const response = await axios.get(`${endpoint}/loans`) 
    setLoans(response.data);
  }

 /*  const getBookById = async (id) => {
    const response = await axios.get(`${endpoint}/book/${id}`) 
    // console.log(response.data)
    return response.data;
  } */

  /* const loanBook = async (id, title, author, published_year, genre, stock) => {
    await axios.put(`${endpoint}/loan/${id}`, {
      title: title,
      author: author,
      published_year: published_year,
      genre: genre,
      stock: stock+1
    }) 

    await axios.post(`${endpoint}/loan`, {
      user_id: defaultUser,
      loan_id: id,
      quantity: 1
    }) 

    getLoans();

  }
 */

  return (
    <div>
      {/* <div className='d-grid gap-2'>
        <Link to="/loan " className='btn btn-success btn-lg'>To check out</Link>        
      </div> */}

      <table className='table table-striped'>
        <thead className='bg-secondary text-white'>
          <tr>            
            <th>User ID</th>
            <th>Book ID</th>
            <th>Title</th>
            <th>Quantity</th>
            {/* <th>Return book</th> */}
          </tr>
        </thead>
        <tbody>
          { loans.map( (loan) => (
            <tr key={ loan.id }>
              <td>{ loan.user_id }</td>
              <td>{ loan.book_id }</td>
              <td>{ loan.title }</td>
              <td>{ loan.quantity }</td>
              {/* <td> */}
                {/* <Link to={`/checkout/${loan.id}`} className='btn btn-warning'>Check out</Link> */}
                {/* <button onClick={ () => returnBook(loan.id, loan.title, loan.author, loan.published_year , 
                  loan.genre, loan.stock) } className='btn btn-warning' >Check out</button> */}
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </div>
  )
}

export default ShowLoans