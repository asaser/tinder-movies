import { useState, useEffect } from 'react';

import MainMovieList from './components/MainMovieList';
import HeaderMovieList from './components/HeaderMovieList.js';
import SingleMovieCard from './components/SingleMovieCard.js';

import TinderCard from 'react-tinder-card';


function App() {

  const [dataMovies, setDataMovies] = useState([]);
  const [headerMovie, setHeaderMovie] = useState('Movie');

  const getAllMovie = async () => {
    const URL_API = "https://api.themoviedb.org/3/movie/top_rated?api_key=4e23d973e0d45954333702c53cd85b92&language=en-US&page=1"

    // const response = await axios.get(URL_API);
    const response = await fetch(URL_API);
    const data = await response.json();

    setDataMovies(data.results);
    console.log('data', data.results)
  }

  // call back data from getAllMovie everytime when page will be load
  useEffect(() => {
    getAllMovie();
  }, []);


  // jeśli w prawo to wyślemy odpowiedź do naszej bazy danych o tym, że ktoś lubi ten film

  // const swipeMovie = (direction) => {
  //     if(direction === 'right') {
  //       <p style={{position: 'absolute', margin: '100px', zIndex: '100'}}>Remove from list {direction}</p>
  //     } else {
  //       <p>Add to list {direction}</p>
  //     }
  // }

  const handleSingleMovie = () => {
    return dataMovies.map((movieInfo) => (
        <TinderCard
          key={movieInfo.id}
            // onSwipe={swipeMovie}
        >
            <SingleMovieCard {...movieInfo} />
        </TinderCard>
    ))
  }


  return (
    <div className="App">
        <div>
            <HeaderMovieList headerMovie={headerMovie} />
        </div>
        
        <div style={{position: 'relative'}}>
            {handleSingleMovie()}
        </div>
    </div>
  );
}

export default App;
