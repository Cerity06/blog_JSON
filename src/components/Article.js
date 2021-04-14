import React from 'react'
import {Link} from 'react-router-dom'

const Article = ({title, likes, body, id}) => {
    const handleClick = async (id) => {
        const res = await fetch('http://localhost:3200/posts/' + id, {
            method: 'DELETE'
        });
    }

    return (
        <article className="article">
                <h2>{title}</h2>
                <p><small>likes: {likes}</small></p>
                <p>{body.slice(0, 200)}</p>
                <Link to={`/articles/${id}`}>read more...</Link>
                <button className='btn_del' onClick={() => handleClick(id)}>Delete article</button>
        </article>
    )
}

export default Article
