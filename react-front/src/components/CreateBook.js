import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/book';

const CreateBook = () => {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishedYear, setPublishedYear] = useState(0)
    const [genre, setGenre] = useState('')
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const addBook = async (e) => {
        e.preventDefault()
        // console.log(title)
        await axios.post(endpoint, {title: title, author: author, published_year: publishedYear, genre: genre, stock: stock })
        navigate('/librarian')
    }

  return (
    <div>
       <h1>Create New Book</h1>
       <form onSubmit={addBook} >   
        <div className='mb-3'>
            <label className='form-label mb-3'>Title</label>
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                className='form-control'
            />
            <label className='form-label mb-3'>Author</label>
            <input 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type='text'
                className='form-control'
            />
            <label className='form-label'>Published Year</label>
            <input 
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value)}
                type='text'
                className='form-control'
            />
            <label className='form-label mb-3'>Genre</label>
            <input 
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                type='text'
                className='form-control'
            />
            <label className='form-label mb-3'>Stock</label>
            <input 
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type='text'
                className='form-control'
            />
            <br></br>

        </div>  
        <button type='submit' className='btn btn-primary'>Create Book</button>   
       </form>
    </div>
  )
}

export default CreateBook