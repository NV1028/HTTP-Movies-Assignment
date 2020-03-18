import React from 'react';
import axios from 'axios';
import {useState} from 'react';

const UpdateMovie = (props) => {

const [updateMovie, setUpdateMovie] = useState({
    title: '',
    director: '',
    metascore: '',
    stars: []
});

    const submitMovieUpdate = e => {
        e.preventDefault();
        console.log(updateMovie)
    }

    const handleChange = e => {
setUpdateMovie({...updateMovie, [e.target.name]: e.target.value})
    }

    const handleStarsChange = e =>{
        setUpdateMovie({...updateMovie, stars: [e.target.value.split(', ')]})
    }
    return(
        <div>
            <form onSubmit={submitMovieUpdate}>
                <div>Title</div>
                <input 
                type='text'
                name='title'
                onChange={e => handleChange(e)}/>
                <div>Director</div>
                <input 
                type='text'
                name='director'
                onChange={e => handleChange(e)}/>
                <div>Metascore</div>
                <input 
                type='text'
                name='metascore'
                onChange={e => handleChange(e)}/>
                <div>Stars (separate by a comma)</div>
                <input 
                type='text'
                name='stars'
                onChange={e => handleStarsChange(e)}/>
                <button>
                    Update Movie
                </button>
            </form>
        </div>
    )
}

export default UpdateMovie;