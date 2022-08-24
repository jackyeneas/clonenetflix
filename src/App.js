import React, {useState, useEffect} from 'react';
import './App.css';
import tmdb from './tmdb';


export default () =>{
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list)
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomChoosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let choosen = originals[0].items.results[randomChoosen]
      let choosenInfo = await tmdb.getMovieInfo(choosen.id, 'tv')
      console.log(choosenInfo)
      setFeaturedData(choosenInfo) 
    } 
    loadAll()
  }, [])

  return (
    <div className='page'>

    </div>
  )
}