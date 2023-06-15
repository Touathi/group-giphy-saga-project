import {useState} from 'react';
import SearchItem from './SearchItem/SearchItem';
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



function SeachView() {
    
    const [input, setInput] = useState(String);
    const dispatch = useDispatch();
    const getPic = useSelector(store => store.getGiffy)

    const handleChange = (e) => {
        setInput(e);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type:'GET_GIFFY',
            payload: input
            
    })
    }

//Rendering Getpic in the DOM

const getPictures = () => {
  
}
useEffect ( () => {
getPictures();
}, [])

console.log(getPic);

return (
        <>
        <div>

            <form onSubmit={(event)=>handleSubmit(event)}>
                <input type="text"
                       placeholder="Search"
                       value={input}
                       onChange={(e) => handleChange(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Search</button>
            </form>


            {getPic.length ?getPic.map((img, i) => (
            <SearchItem key={i}img ={img}/>
        )) :<p>Hello</p>} 

            







        </div>
        </>

    );

}




export default SeachView;
