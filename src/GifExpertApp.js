import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = []}) => {
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // setCategories(cats => ['Attack of Titans', ...categories]);
    //     setCategories(['Attack of Titans', ...categories]);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {/* {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>
                    })
                } */}
                {
                    categories.map((category) => {
                        return <GifGrid
                                    key={category} 
                                    category={category} 
                                />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;