import React from 'react'

const HttpRequest = () => {
    
    const getData = (callback) => {
        // initiate 
        const request = new XMLHttpRequest(); 

        request.addEventListener('readystatechange', () => {
            console.log(request, request.readyState); 
    
            // verify if the response is ok 
            if (request.readyState === 4 && request.status === 200) {

                // JSON to JS 
                const data = JSON.parse(request.responseText); 
                callback(undefined, request.responseText); 

            } else if (request.readyState === 4) {
                callback("couldn't fetch the data", undefined); 
            }
        }); 

        // can be internal file --> request.open("GET", 'data.json');
        request.open("GET", 'http://localhost:3200/posts');
        request.send();
    }

    getData((err, data) => {
        console.log('callback fired');
        if (err) {
            console.log(err); 
        } else {
            console.log(data); 
        }
    }); 
 

    return (
        <div>
            
        </div>
    )
}

export default HttpRequest
