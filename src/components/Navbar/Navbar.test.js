import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import "@testing-library/jest-dom/extend-expect";

import { Navbar } from ".";
import avatar from '../../assets/avatar.jpg';

Enzyme.configure({
    adapter: new Adapter()
})

describe('Testing Navbar component', () => {
    it('should be set user name', () => {
        const username = "Usuário teste";
        const wrapper = shallow(<Navbar username={username}/>);
        const textToBeTested = wrapper.find('.user-name').text();

        expect(textToBeTested).toBe(username);
    })

    it('should be set an avatar image', () => {
        const wrapper = shallow(<Navbar src={avatar}/>);
        const img = wrapper.find('img');

        expect(img.prop('src')).toEqual(avatar);
    })
})