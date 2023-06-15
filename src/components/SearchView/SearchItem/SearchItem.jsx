import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function getGiffyPicture () {
    
    const dispatch = useDispatch();
    const getpic = useSelector(store => store.getpic)

        //Rendering Getpic in the DOM

        const getPictures = () => {
            dispatch({type:'GET_GIFFY'})
        }
useEffect ( () => {
    getPictures();
}, [])

console.log(getpic);

return (
    <>
    <div>

        {getpic.length ?(getpic.map((img, i) => (
            <img key={i} src={img.giphy_url}> </img>
        ))):<p>hello</p>}

    </div>
    
    </>
)



}




export default getGiffyPicture;