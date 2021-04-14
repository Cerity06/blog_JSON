import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router-dom";

const Create = () => {
    const history = useHistory();
    const [title, setTitle] = useState()
    const [text, setText] = useState()
    const [check, setCheck] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        
        const art = {
            title: title, 
            body: text, 
            likes: 0
        }

        await fetch('http://localhost:3200/posts', {
            method: 'POST',
            body: JSON.stringify(art),
            headers: {'content-Type':'application/json'}
        });

        history.push('/articles');
    }

    return (
        <div className="create_art">
            <h2>Create your article</h2>

            <form className='form_art'>
                <label for="title">Title</label>
                <input className="title" onChange={(e) => setTitle(e.target.value)}/>
                
                <label for="text">Your article</label>
                <textarea className="text" onChange={(e) => setText(e.target.value)}/>
                
                <label for="check">Public access</label>
                <input className="check"  type="checkbox" onClick={() => setCheck(!check)}/>
                
                <button className="submit" type="submit"
                onClick={(e) => handleClick(e)}>
                Submit
                </button>
            </form>
        </div>
    )
}

export default Create
