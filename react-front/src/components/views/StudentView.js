import React from 'react'
import ShowBooks from '../ShowBooks'
import ShowLoans from '../ShowLoans'

const StudentView = () => {
  return (
    <div>
        <h2> Student View</h2>

        <h2>Library</h2>
        <ShowBooks />
        <h2>My Loans</h2>
        <ShowLoans />

    </div>
  )
}

export default StudentView