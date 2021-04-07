import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {
    // Custom Hook
    const {data:images, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p> }
            <div className='card-grid'>
                    {
                        images.map((img) => {
                            // return <li key={id}> {title} <img src={url} /> </li>
                            return <GifGridItem 
                                        key={img.id}
                                        {...img}
                                    />
                        })
                    }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
