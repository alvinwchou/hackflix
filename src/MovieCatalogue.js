// 1 import the axios library
import axios from 'axios';
// 2 import the useState Hook and useEffect Hook
import { useState, useEffect}  from 'react';

// in order to recrate the behaviour of an anchor tag witht he added benefit/logic of React Router, we cna use the Link component
import { Link } from 'react-router-dom';

export default function MovieCatalogue() {
    console.log('Catalogue has rendered');
    
    // 3 initialize state to keep track of the movie data which will be returned from the API
    const [movies, setMovies] = useState([])
    // 4 initialize a useEffect to run the side effect of fetching data from the movie API (this side effect is running a single time on page load)
    useEffect( () => {
        console.log('side effect is running');
        // 5 make an asynchronous request to the TMDB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '17adf808617211375714eb9c4c40f1ef',
                include_adult: false,
            }
        }).then( (apiData) => {
            // 6 save the retured data within state
            console.log(apiData.data.results);
            setMovies(apiData.data.results)
            console.log(movies);
        })
        
    

    }, [] );
    return(
        <section>

        <h2>Here are your viewing options:</h2>

        {/* 7 map through state and return a movie for each movie present in the returned API state */}
        <ul className='catalogue'>
            {
                movies.map( (movie) => {
                    return(
                        // we want to make the poster clickable and navigate to a unique URL to represent each specific movie
                        <Link to={`/${movie.id}`} key={movie.id}>
                            <li>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={`A poster for the movie ${movie.original_title}`}
                                    />
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
        </section>
    )
}