import React from 'react'

import {Link} from 'react-router-dom'

const AddUser = () => {
  return (
    <div className='d-grid gap-2'>
        <Link to="/new-user" className='btn btn-success btn-lg' width='400'>Add User</Link>   
        <br />     
    </div>

  )
}

export default AddUser