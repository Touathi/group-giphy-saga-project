
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react'

function Favpic({img}) {


    const favPicCategory = useSelector(store => store.favPicCategory)

    const dispatch = useDispatch();
   
    const setCategory = (id) => {
        console.log(id);
        dispatch( { type: 'PUT_CATEGORY', payload: {id: img.id, category_id: id}})

    }

    const renderCategory = (id) => {
        if (id === 1) {
            setNewCategory('1')
        }
        console.log(NewCategory);
        dispatch( { type: 'SET_CATEGORY', payload: NewCategory})
    }
    console.log(favPicCategory);

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




