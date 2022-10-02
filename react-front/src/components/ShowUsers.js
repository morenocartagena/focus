import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const defaultUser = 1;
const endpoint = 'http://127.0.0.1:8000/api';

const ShowUsers = () => {

  const [users, setUsers] = useState([])

  useEffect( () => {
      getUsers();
  }, [])

  const getUsers = async () => {
    const response = await axios.get(`${endpoint}/users`) 
    setUsers(response.data);
  }

  return (
    <div>
      {/* <div className='d-grid gap-2'>
        <Link to="/loan " className='btn btn-success btn-lg'>To check out</Link>        
      </div> */}

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          { users.map( (user) => (
            <tr key={ user.id }>
              <td>{ user.first_name }</td>
              <td>{ user.last_name }</td>
              <td>{ user.email }</td>
              <td>{ user.role }</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </div>
  )
}

export default ShowUsers