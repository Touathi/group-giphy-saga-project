import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import Favpic from './FavPic/FavPic';


function FavView() {


    return(
        <>

            <div>
               <Favpic /> 
            </div>
            
        </>
    );




}


export default FavView;
