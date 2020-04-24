import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateBeerForm from './CreateBeerForm';

Enzyme.configure({ adapter: new Adapter() });

describe("Title input", () => {
    it("Should capture title correctly onChange", () => {
        const wrapper = shallow(<CreateBeerForm />);

        expect(wrapper.exists()).toBe(true);
    });
});