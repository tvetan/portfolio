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
        expect(component.type()).toEqual('span');
    });

    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    })

    it("Should allow the modal to open and close", () => {
        expect(component.instance().state.modalOpen).toBe(false);

        component.instance().openModal();
        expect(component.instance().state.modalOpen).toBe(true);

        component.instance().closeModal();
        expect(component.instance().state.modalOpen).toBe(false);

    })
});


describe("ExampleWorkBubble component", () => {
    let mockOpenModalFn = jest.fn();

    let component = shallow(<ExampleWorkBubble example={myWork[0]} openModal={mockOpenModalFn} />)

    let images = component.find("img")
    it("Should contain a single image element", () => {
        //console.log(component.debug())
        expect(images.length).toEqual(1);
    });

    it("Should have the image src set correctly", () => {
        //console.log(component.debug())
        expect(images.prop('src')).toEqual(myWork[0].image.src);
    });

    it("Should call the openModal handler when clicked", () => {
        component.find(".section__exampleWrapper").simulate('click');
        expect(mockOpenModalFn).toHaveBeenCalled()
    });
});