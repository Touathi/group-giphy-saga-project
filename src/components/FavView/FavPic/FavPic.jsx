import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

function Favpic() {

    const dispatch = useDispatch();
    const favpic = useSelector(store => store.favPic)

    // Rendering Fav pics onto DOM
    const getFavPics = () => {
        dispatch( {type: 'GET_FAV_PIC' })
    }
  
    useEffect( () => {
        getFavPics()
    }, [])
    
    console.log(favpic);
    return (

        <>
        <div>

            {favpic.length ? (favpic.map((img, i) => (
                <img key={i} src={img.giphy_url} ></img>
            ))) : <p>ninja</p>}
                
         
        </div>
         
        </>
    )
}

export default Favpic




