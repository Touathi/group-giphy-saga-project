import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function SearchItem ({img}) {
    
    const dispatch = useDispatch();

    const handleLike = () => {
        dispatch({
            type:'LIKE_PIC',
            payload: {
                title:img.title,
                url: img.images.original.url
            }
        })
    }

return (
<div>
    <img src={img.images.original.url}></img>
    <button onClick={handleLike}>Like</button>

    </div>

)



}




export default SearchItem;