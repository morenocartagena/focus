import React from 'react'

const LibrarianView = () => {
  return (
    <div>
    <h2> Librarian View</h2>

    <h2>Add User</h2>
    <AddUser />
    <h2>Add Book</h2>
    <AddBook />
    <h2>My Loans</h2>
    <ShowLoans />

</div>
  )
}

export default LibrarianView