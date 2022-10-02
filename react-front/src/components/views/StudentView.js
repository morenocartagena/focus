import React from 'react'
import ShowBooks from '../ShowBooks'
import ShowLoans from '../ShowLoans'

import {Link} from 'react-router-dom'

const StudentView = () => {
  return (
    <div>
        <h2>MY U LIBRARY</h2>
        <Link to="/librarian" className='btn btn-info btn-sm' width='400'>Login as Librarian</Link> 
        <br />
        <h2> Student View</h2>

        <h2>Library</h2>
        <ShowBooks />
        <h2>My Loans</h2>
        <ShowLoans />

    </div>
  )
}

export default StudentView