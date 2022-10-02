import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/user';

const CreateUser = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('student')
    const navigate = useNavigate()

    const addUser = async (e) => {
        e.preventDefault()
        console.log(role)
        await axios.post(endpoint, {first_name: firstName, last_name: lastName, email: email, role: role })
        navigate('/librarian')
    }

  return (
    <div>
       <h1>Create New User</h1>
       <form onSubmit={addUser} >   
        <div className='mb-3'>
            <label className='form-label mb-3'>First Name</label>
            <input 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
            />
            <label className='form-label mb-3'>Last Name</label>
            <input 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
            />
            <label className='form-label'>Email</label>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                className='form-control'
            />
            <br></br>
            <label className='form-label'>Role: &nbsp; </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="librarian">Librarian</option>
          </select>
        </div>  
        <button type='submit' className='btn btn-primary'>Create User</button>   
       </form>
    </div>
  )
}

export default CreateUser