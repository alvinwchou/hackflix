import './index.css';
import Header from './Header';

//  import 2 pieces from the router library which will allow us to configure the routes witin this app
import { Routes, Route } from 'react-router-dom';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';

function App() {
  
  return (
    <div className="wrapper">
      {/* This app consists of 3 components: */}
      {/* a header */}
      <Header />

      {/* now we need to define our routing configuration (this is often done within the App component) */}

      {/* Step 1: use the Routes component to act as a parent container to all of the subsequently defined Routes AKA define URL paths */}
      <Routes>
        {/* Step 2: define the individual routes / URL paths with are available withinin your app, as well as the compoenents which are visible at those paths */}
        {/* here is where you will define which component is visible at what path */}
        <Route path="/" element={ <MovieCatalogue /> }/>


        {/* the MovieInfo component should be shown when the route looks like: */}
        {/* www.homepage.com/movieIdHere */}
        {/* :movieI is like a url param */}
        <Route path="/:movieId" element={ <MovieInfo /> }></Route>
      
      
      </Routes>
      {/* a Movie Catalogue */}
        {/* this compnent is only visible on the homepage */}

      {/* a Movie Details compnent (which is rendred  when the user selects a movie) */}
    </div>
  );
}

export default App;
