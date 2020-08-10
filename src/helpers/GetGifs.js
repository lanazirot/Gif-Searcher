 //Obtener todos los gifs con la peticion http
 export const getGifs = async(videogame) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=w4JSpSfDCCiymyoqaeSJAkTUKbws16Bk&q=${encodeURI(videogame)}&limit=20`;
    const res = await fetch(url);

    const {data} = await res.json();

    //ve retornando cada gif como un objeto y asignalo a gifs (array)
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}