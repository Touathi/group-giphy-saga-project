import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import Favpic from './FavPic/FavPic';


function FavView() {
    const dispatch = useDispatch();
    const favpic = useSelector(store => store.favPic)

    const getFavPics = () => {
        dispatch( {type: 'GET_FAV_PIC' })
    }

 
  
    useEffect( () => {
        getFavPics()
    }, [])

    
    return(
        <>

            <div>
            {favpic.map((img, i) => (
                <Favpic 
                    img={img}
                    key={i} /> 
            ))}
            </div>
            
        </>
    );




}


export default FavView;
