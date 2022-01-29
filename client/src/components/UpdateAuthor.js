import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const UpdateAuthor = (props) => {
    const {id} = props;
    const [name, setName] = useState('');
    const [errors, setErrors] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
    }, [id])

    const authorUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
        .then(res => console.log(res))
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        });
    }
    return(
        <form onSubmit={authorUpdate}>
            <div>
                <h2>Edit Author</h2>
                <p className="err"><Link to="/">See List</Link></p>
            </div>
            <div>
                {errors ? errors.map((err, index) => <p className="err" key={index}>{err}</p>) : null}
                <p className='list'>
                    <label>Name: </label>
                    <input type='text' onChange = {(e) => setName(e.target.value)} name='name' value={name}/>
                    <button type='submit'>Submit</button>
                </p>
            </div>
            </form>
    )
}
export default UpdateAuthor