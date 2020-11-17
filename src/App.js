import React, { useState } from "react";
import './App.css';
import './index.css'
import MovieList from './MovieList';
import Recherche from './recherche';
import AddMovie from './AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(props) {
  const [movie,setMovie]= useState(
    {
      image: null,
      title: "",
      description: "",
      rate: 0,
    },
  )
  const [filter, setFilter] = useState({
    text: '', star: 0
  })
  
  const [movies, setMovies] = useState([{
    image : 'https://staticr1.blastingcdn.com/media/photogallery/2020/3/17/os/b_1200x630/vikings-esta-disponivel-na-netflix-reproducaonetflix_2419819.jpg',
    title : ' Viking',
    description: 'Viking era ',
    url : 'https://www.youtube.com/watch?v=f5av6OqFwz0&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9%D0%A0%D0%B5%D1%88%D0%B5%D1%82%D0%BD%D1%8F%D0%BA',
   rate : 3 
  },{
     image : 'https://www.forom.com/trail/game_of_thrones.jpg',
     title : ' Game of Throne',
     description: '3alamiaaaaa',
     url : 'https://www.youtube.com/watch?v=gcTkNV5Vg1E&ab_channel=VERITASERUMUK',
  rate : 3
 
 },{
     image : 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/504348d4-e43d-40d3-8c03-772df64b2595/801x410_death_note.jpg',
    title : ' Death Note',
    description: 'a7sen manga ever',
    url : 'https://www.youtube.com/watch?v=NlJZ-YgAt-c&ab_channel=CrunchyrollCollection',
 rate : 4
 },{
image : 'https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/Les-Sopranos-1-850x446-1585574522.jpg',
title: 'The Sopranos',
description: 'mafia boha kalb',
url: 'https://www.youtube.com/watch?v=wrN2k3qGbVA&ab_channel=zvo10',
rate : 2




 }]
  )
  


  return (
    <div className="App">
      
      <br/>
      <MovieList movies={movies.filter((e) => 

        (e.title.toLowerCase().includes(filter.text.toLowerCase())) && e.rate >= filter.star
         

      )} />
      <AddMovie addFilm={setMovies} films={movies}/>
      <Recherche setFilter={setFilter} filter={filter} />
      {console.log(filter)}
      
{console.log(movie)}
    </div>

  );
}

export default App;