import React, {useState , useEffect}  from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "components/ListofGifs"
import getGifs  from "./../../services/getGifs"
import { useGifs } from "hooks/useGifs"
// import TrendingSearches from 'components/TrendingSearches'
//import SearchForm from 'components/SearchForm'
import Category from 'components/Category'
import TrendingSearches from "components/TrendingSearches"
const POPULAR_GIFS = ["Matrix", "Venuezela", "Chile", "Ecuador"]

export default function Home() {
  const [keyword, setkeyword]= useState('') 
  const [path, pushLocation]= useLocation()

  const {loading, gifs}= useGifs()
  
 

  const handleSubmit =  evt => {
                               //navegar a otra ruta 
                               evt.preventDefault()
                               pushLocation(`/search/${keyword}`)
                               // console.log(keyword)
                               }
  const handleChange =  evt => {
                                setkeyword(evt.target.value)
                               }
                               

  return (
    <>
      <h3 className="App-title"> Los Gifs mas Populares</h3>
      <form onSubmit={handleSubmit}> 
        <input className="" placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
        <button className="btn">Buscar!</button>
      </form>
      <h3 className="App-title"> Ultima Busqueda </h3>
      <ListOfGifs  gifs={gifs} />

    
      <div className="App-category">
        <TrendingSearches />
        </div>
    </>
  )
}