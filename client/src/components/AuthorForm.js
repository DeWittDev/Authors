import React, {useState} from 'react';
import axios from 'axios'
import {Link} from '@reach/router'

const NewAuthor =() => {
    const [author, setAuthor] = useState('');
    const [name, setName] =useState('');
    const [errors,setErrors] =useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => setAuthor([...author, res.data]))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <h2>Add Author</h2>
                <p className="err"><Link to="/">See List</Link></p>
            </div>
            <div>
                {errors ? errors.map((err, index) => <p className="err" key={index}>{err}</p>) : null}
                <p className='list'>
                    <label>Name: </label>
                    <input type='text' onChange={(e) => setName(e.target.value)} name='name' value={name}/>
                    <button>submit</button>
                </p>
            </div>

        </form>
    )
}

export default NewAuthor;