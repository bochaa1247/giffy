import {useContext ,useEffect ,useState } from "react"
import getGifs from './../services/getGifs'
import GifsContext from './../context/GifsContext'

export  function useGifs ({keyword}={keyword: null }){

        const [loading ,setLoading] = useState(false)

        const {gifs, setGifs}= useContext(GifsContext)
        console.log(gifs)
        //console.log(gifs)
        //console.log('hola')

        useEffect(function ()  {
        setLoading(true)
        // Recuperamos la keyword del localStorage 
        const keywordToUse =  keyword || localStorage.getItem('lastKeyword') || 'random'
        

        getGifs({keyword: keywordToUse})
        .then(gifs =>{
            setGifs(gifs)
            setLoading(false)
            // Guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword',keyword)
        })
        }, [keyword,setGifs])
    return {loading, gifs}
}