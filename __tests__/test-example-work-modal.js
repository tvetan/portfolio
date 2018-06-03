import React from 'react'
import {shallow } from 'enzyme'
import ExampleWorkModal from '../js/example-work-modal'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const myExample = {
    'title': "Wartsila",
    'href': 'https://www.wartsila.com',
    'desc': 'Wärtsilä is a global leader in smart technologies and complete lifecycle solutions for the marine and energy markets. By emphasising sustainable innovation, total efficiency and data analytics, Wärtsilä maximises the environmental and economic performance of the vessels and power plants of its customers',
    'image': {
        'desc': "Wartsila website",
        'src': "images/wartsila.png"
    }
}

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample} open={false} />)
    let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} />)

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1)
    })

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBeTruthy();
        expect(openComponent.find(".background--skyBlue").hasClass("modal--closed")).toBeFalsy();
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBeTruthy();
    })
})

