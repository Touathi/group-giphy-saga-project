
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react'
import React, { useEffect } from 'react';

function Favpic({img}) {
    
    console.log(img);
    const dispatch = useDispatch();
    const setCategory = (id) => {
        console.log(id);
        dispatch( { type: 'PUT_CATEGORY', payload: {id: img.id, category_id: id}})
    }
   

    return (
        <>
            <div>      
                
                <img src={img.giphy_url} ></img>
            </div>
            <div onSubmit={setCategory}>
                <label>Set Category</label>
                <button onClick={(event) => setCategory('1')}>Funny</button>
                <button onClick={(event) => setCategory('2')}>Cohort</button>
                <button onClick={(event) => setCategory('3')}>Cartoon</button>
                <button onClick={(event) => setCategory('4')}>Nsfw</button>
                <button onClick={(event) => setCategory('5')}>Meme</button>
            </div>
            <div>
                <p>Category: {img.category_id} </p>
            </div>
        </>
    )
}

export default Favpic




