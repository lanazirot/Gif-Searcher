import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    //Referencia

    const [videogames, setVideogames] = useState(['']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <h3>Escribe lo que quieras y te mostraré diez gifs</h3>
            <AddCategory setVideogames={setVideogames}/>
            <hr/>
            <ol>
                {
                    videogames.map( videogame => (
                            <GifGrid 
                            key={videogame}
                            videogame={videogame}/>                        
                        ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
