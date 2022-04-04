import React, {  useEffect, useState } from 'react';

import MovieRow from './components/MovieRow'

import { getHomeList } from './utils/Tmdb';

import './App.css'

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const loadAll = async () => {
    let list = await getHomeList();
    // console.log(list)
    setMovieList(list);
  }

  useEffect(() => {
    loadAll();
  }, [])


  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App