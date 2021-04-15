import React from 'react'
import Article from './Article'
import {useState, useEffect} from 'react'
import Search from './Search'

const Articles = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(); 

    const infos = async () => {
        let url = 'http://localhost:3200/posts?_sort=likes&_order=desc';

        if (search) {
            url += `&q=${search}`;
        }
    
        const res = await fetch(url);
        const posts = await res.json();
        console.log(posts);
        setData(posts);
      }
    
    useEffect(() => {
       infos();
    }, [search]);

    return (
        <div className="articles">
            <Search search={setSearch}/>
            {data.map(post => (
                <Article
                title={post.title}
                body={post.body}
                likes={post.likes}
                id={post.id} />
            ))}
        </div>
    )
}

export default Articles
