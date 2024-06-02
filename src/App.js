import logo from './logo.svg';
import './App.css';
import Result from './Component/Result';
import axios from 'axios';
import { useEffect, useState } from 'react';

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

const [movies,setMovies]=useState([]);
const [search,setSearch]=useState("");

const getAllMovies = () => {
  axios.get(APIURL)
    .then(
      (response) => {
        // console.log(response.data.results)
        setMovies(response.data.results);
      }
    )
    .catch(
      (error) => {
        console.log(error)
      }
    )
}

const changeTheSearch = (event) =>{
// console.log(event.target.value);
setSearch(event.target.value);
}

const getSearchMovies =() =>{
axios.get(
  SEARCHAPI+search 
)
.then(
  (response) =>{
    // console.log(response.data.results)
    setMovies(response.data.results);

  }
)

.catch(
  (error) =>{
    console.log(error)

  }
)
// console.log( SEARCHAPI+search)
}

useEffect(
  ()=>{
    setMovies([]);
if(search === ""){
  getAllMovies();
}
else{
  getSearchMovies();
}
  },
  [search]
)


  return (
<div className='max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3'>
  <input type='search' value={search}  onChange={changeTheSearch} className='w-full border border-black rounded text-slate-800 p-4' />
{
  movies.length === 0 
  ?
  <div className='text-3xl text-center mt-2'>Loading...</div>
  :
  <Result movies={movies}/>

}
</div>
  );
}

export default App;
