import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

const UpdateMovie = (props) => {
    const match = useRouteMatch();
    const [updateMovie, setUpdateMovie] = useState({
        id: '1',
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    useEffect(() => {
        const movieToUpdate = props.movieList.find(item => {
           return item.id === match.params.id;
        });
        console.log('movieList', props.movieList)
        // console.log("movieToUpdate", movieToUpdate)
        // try finding the id from props.movieList...id
        console.log('props inside useEffect', props);
        console.log('match.params.id:', match.params.id)
        if (movieToUpdate) {
            setUpdateMovie(movieToUpdate);
        }
    }, [props, match.params.id])

    const submitMovieUpdate = e => {
        e.preventDefault();
        console.log('updateMovie inside submitMovieUpdate', updateMovie)
        axios
            .put(`http://localhost:5000/api/movies/1`, updateMovie)
            .then(res => {
                console.log('res inside put', res)
                props.updateMovieList(res.data);
            })
            .catch(err => {
                console.log('err inside catch', err);
            })
    }

    const handleChange = e => {
        setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value })
    }

    const handleStarsChange = e => {
        setUpdateMovie({ ...updateMovie, stars: [e.target.value.split(', ')] })
    }
    console.log('props outside of everything above return', props)
    return (
        <div>
            <form onSubmit={submitMovieUpdate}>
                <div>Title</div>
                <input
                    type='text'
                    name='title'
                    onChange={e => handleChange(e)} />
                <div>Director</div>
                <input
                    type='text'
                    name='director'
                    onChange={e => handleChange(e)} />
                <div>Metascore</div>
                <input
                    type='text'
                    name='metascore'
                    onChange={e => handleChange(e)} />
                <div>Stars (separate them by a comma if more than one)</div>
                <input
                    type='text'
                    name='stars'
                    onChange={e => handleStarsChange(e)} />
                <button>
                    Update Movie
                </button>
            </form>
        </div>
    )
}

export default UpdateMovie;