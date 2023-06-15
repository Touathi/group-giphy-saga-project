import {useState} from 'react';
import SearchItem from './SearchItem/SearchItem';



function SeachView() {
    
    const [input, setInput] = useState(String);

    const handleChange = (e) => {
        setInput(e);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

return (
        <>
        <div>

            <form onSubmit={(event)=>handleSubmit(event)}>
                <input type="text"
                       placeholder="Search"
                       value={input}
                       onChange={(e) => handleChange(e.target.value)}
                        />
            </form>
            <SearchItem/>







        </div>
        </>

    );

}




export default SeachView;
