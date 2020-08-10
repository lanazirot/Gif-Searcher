import React  from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

const GifGrid = ({videogame}) => {

    const {data:images, loading} = useFetchGifs(videogame);
    //data:images la data aca se llama images


    return (
        <>
        <h3>{videogame}</h3>
        {
            loading && <p>Cargando...</p>
        }
        <div className="card-grid animate__animated animate__fadeIn">
                {
                    //Carga cada imagen en un GifGridItem personalizado
                    images.map( img=> (
                       <GifGridItem
                            key={img.id}
                            {...img}
                       />
                    ))
                }
        </div>
        </>
    )
}

//Necesito un videojuego...
GifGrid.propTypes = {
    videogame: PropTypes.string.isRequired
}

export default GifGrid;
