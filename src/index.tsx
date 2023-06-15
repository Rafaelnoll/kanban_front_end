import React from 'react';
import reactDom from 'react-dom';

interface Cat {
    meaw: boolean;
}

const cat: Cat = {
    meaw: true,
}

console.log(cat);

reactDom.render(
    <h1>Hello word!</h1>,
    document.getElementById('root')
)