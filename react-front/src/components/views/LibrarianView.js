import React from 'react'
import AddUser from '../AddUser'
import AddBook from '../AddBook'
import ShowLoans from '../ShowLoans'
import ShowUsers from '../ShowUsers'
import ShowBooks from '../ShowBooks'

import {Link} from 'react-router-dom'

const LibrarianView = () => {
  return (
    <div>
    <h2>MY U LIBRARY</h2>
        <Link to="/" className='btn btn-info btn-sm' width='400'>Login as Student</Link> 
    <br />
    <h2> Librarian View</h2>

    <hr align="center" size="10"  />
    <AddUser />
    <ShowUsers />
    <hr />
    <AddBook />
    <ShowBooks />
    <hr />
    <h2>Loans</h2>
    <ShowLoans role='librarian'/>

</div>
  )
}

export default LibrarianView