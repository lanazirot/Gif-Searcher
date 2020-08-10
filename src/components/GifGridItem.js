import React from 'react'

export const GifGridItem = ({id, title, url}) => {

    const handleCardClick = () => {
        window.location.href=url;
    }

    //Renderiza cada item que te pasen en una grilla...
    return (
        <div className="card" onClick={handleCardClick}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
