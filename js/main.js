import React from 'react'
import ReactDom from 'react-dom'
import ExampleWork from './example-work'


const myWork = [
    {
        'title': "Wartsila",
        'href': 'https://www.wartsila.com',
        'desc': 'Wärtsilä is a global leader in smart technologies and complete lifecycle solutions for the marine and energy markets. By emphasising sustainable innovation, total efficiency and data analytics, Wärtsilä maximises the environmental and economic performance of the vessels and power plants of its customers',
        'image': {
            'desc': "Wartsila website",
            'src': "images/wartsila.png"
        }
    },
    {
        'title': "Ruukki",
        'href': 'https://www.ruukki.com',
        'desc': 'Ruukki manufactures energy-efficient building and construction solutions, with a focus on Northern and Eastern Europe. With have around 2,500 employees and production facilities across 15 plants in Europe.',
        'image': {
            'desc': "Ruukki website",
            'src': "images/ruukki.png"
        }
    },
    {
        'title': "Layer 2",
        'href': 'https://www.layer2solutions.com/',
        'desc': 'Layer2 leading solutions is the market-leading provider of data integration and document synchronization solutions for the Microsoft Cloud, focusing on Office 365, SharePoint, and Azure. Over 200 regional implementation partners and more than 2,500 companies worldwide trust in Layer2 Products to keep data and files in sync between 100+ systems and apps in the cloud and on-premises.',
        'image': {
            'desc': "Layer 2 website",
            'src': "images/layer2.png"
        }
    }
]

ReactDom.render(<ExampleWork work={myWork} />, document.getElementById('example-work'))