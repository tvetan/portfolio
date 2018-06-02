import React from 'react'
import {shallow } from 'enzyme'
import ExampleWork, { ExampleWorkBubble } from '../js/example-work'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

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

describe("ExampleWork component", () => {
    let component = shallow(<ExampleWork work={myWork}/>)
    it("Should be a 'section element", () => {
        //console.log(component.debug())
        expect(component.type()).toEqual('section');
    });

    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    })
});


describe("ExampleWorkBubble component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[0]} />)

    let images = component.find("img")
    it("Should contain a single image element", () => {
        //console.log(component.debug())
        expect(images.length).toEqual(1);
    });

    it("Should have the image src set correctly", () => {
        //console.log(component.debug())
        expect(images.prop('src')).toEqual(myWork[0].image.src);
        expect(5).toEqual(6)
    });
});