import React from 'react'
import ReactDom from 'react-dom'
import ExampleWork from './example-work'


const myWork = [
    {
        'title': "Wartsila",
        'image': {
            'desc': "Wartsila website",
            'src': "images/wartsila.png"
        }
    },
    {
        'title': "Ruukki",
        'image': {
            'desc': "Ruukki website",
            'src': "images/ruukki.png"
        }
    },
    {
        'title': "Layer 2",
        'image': {
            'desc': "Layer 2 website",
            'src': "images/layer2.png"
        }
    }
]

ReactDom.render(<ExampleWork work={myWork} />, document.getElementById('example-work'))