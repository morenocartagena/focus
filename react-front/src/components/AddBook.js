import React from 'react'

import {Link} from 'react-router-dom'

const AddBook = () => {
  return (
    <div className='d-grid gap-2'>
    <Link to="/new-book" className='btn btn-success btn-lg' width='400'>Add Book</Link>   
    <br />     
    </div> 
  )
}

export default AddBook