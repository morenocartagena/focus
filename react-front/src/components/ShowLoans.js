import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const defaultUser = 1;
const endpoint = 'http://127.0.0.1:8000/api';

const ShowLoans = (props) => {

   const disabled = () => { 
        if(props.role = 'librarian'){
            disabled = 'disabled'; }  
    } 

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

   const returnBook = async (id, book_id) => {

   /* await axios.put(`${endpoint}/book/${book_id}`, {
      stock: stock+1
    }) */

    await axios.delete(`${endpoint}/loan/${id}`, { }) 

    getLoans();

  } 

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
            <th>Return book</th>
          </tr>
        </thead>
        <tbody>
          { loans.map( (loan) => (
            <tr key={ loan.id }>
              <td>{ loan.user_id }</td>
              <td>{ loan.book_id }</td>
              <td>{ loan.title }</td>
              <td>{ loan.quantity }</td>
              <td>                                           
                  <button onClick={ () => returnBook(loan.id, loan.book_id ) } className='btn btn-danger' >Return book</button>                 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </div>
  )
}

export default ShowLoans