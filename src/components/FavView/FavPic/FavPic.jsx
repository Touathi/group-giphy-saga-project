import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

function Favpic({img}) {

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
                <p>Set Category</p>
                <button onClick={(event) => setCategory('1')}>Funny</button>
                <button onClick={(event) => setCategory('2')}>Cohort</button>
                <button onClick={(event) => setCategory('3')}>Cartoon</button>
                <button onClick={(event) => setCategory('4')}>Nsfw</button>
                <button onClick={(event) => setCategory('5')}>Meme</button>
            </div>
        </>
    )
}

export default Favpic




