// import axiose so that we can make some async requests
import axios from "axios";

// import useState AND useEffect Hooks
import { useState, useEffect } from "react";

// we want to use the movie id which is currently in the URL (at which this component renders) within our axios call
// in order to grab information from a URL (when using Router) we can use the useParms Hook
import { useParams } from "react-router-dom";

export default function MovieInfo() {

    // let's call the useParma Hook and see what it returns:
    console.log( useParams() );

    // call the useParams Hook and extract the movieId property from within the params object it returns
    const {movieId: movie_id} = useParams()

    // initialize state to reproesent the movei details which will be returned to us from the API
    const [details, setDetails] = useState({});

    // define a side effect which will fetch data about the movei after the component 
    useEffect( () => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: '17adf808617211375714eb9c4c40f1ef',
            }
        }).then( (apiData) => setDetails(apiData.data))

    // specify that this side effect should only one time after the component has first rendered
    }, [])
    // use axios to make a request to the movie id endpoint

    return(
        <section className="poster">
            <div className="description">
                {/* render the movie tagline, summary, and title */}
                <h3>{details.tagline}</h3>
                <h2>{details.title}</h2>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                <img
                    src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                    alt={`A poster for the movie ${details.original_title}`}
                />
            </div>
        </section>
    )
}