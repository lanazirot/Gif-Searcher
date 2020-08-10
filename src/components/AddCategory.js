import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setVideogames}) => {

    const [inputValue, setInputValue] = useState('') //Dejalo asi ya que la caja se encuentra vacia

    const handleInputValue = (e) => {
        setInputValue(e.target.value); //Lo que el usuario escribio
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){ //Si lo que metes es mayor a 2 entonces hazlo
            setVideogames( have => [inputValue, ...have]); //Obten todas
            // las copias que tiene de videojuegos y metele lo que escribiste
            setInputValue(''); //Vacia la caja de texto
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{inputValue}</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setVideogames: PropTypes.func.isRequired //Es una funcion requerida
}

