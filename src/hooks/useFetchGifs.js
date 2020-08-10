import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/GetGifs'
export const useFetchGifs = (videogame) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(videogame)
            .then( videogame =>{
                setState({
                    data: videogame,
                    loading: false,
                })
            })
    }, [videogame])



    return state;
}
