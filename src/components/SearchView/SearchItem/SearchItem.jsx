import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function SearchItem ({img}) {
    

return (

    <img src={img.images.original.url}></img>
)



}




export default SearchItem;