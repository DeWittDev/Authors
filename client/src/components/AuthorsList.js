import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AuthorsList = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
    .then(res => {console.log(res.data); setAuthors(res.data);})
    .catch((err) => {console.log(err);})
    }, [])

    const deleteOne = (routeId) => {
        axios.delete(`http://localhost:8000/api/authors/${routeId}`)
            .then(res => {
                const list = authors.filter((author, index) => author._id !== routeId)
                setAuthors(list)
            })
            .catch(err => console.log(err))
    }


    return(
        <div>
            <div>
                <h2>Favorite Authors</h2>
                <Link to={'/api/new'}>Add and author</Link>
            </div>
            <div>
                {authors ? authors.map((author, index) => {
                return(
                    <div key={index} className="list">
                        <p>{author.name}</p>
                        <div className="pair">
                            <button className="btn" onClick={()=>{navigate(`/api/update/${author._id}`)}}>Edit</button>
                            <button className="btn" onClick={() => deleteOne(author._id)}>Remove</button>
                        </div>
                    </div>
                )}): null}
            </div>
        </div>
    )
}

export default AuthorsList