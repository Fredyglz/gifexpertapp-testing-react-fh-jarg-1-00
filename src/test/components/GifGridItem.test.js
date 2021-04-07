import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GidGridItem', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('deberia de hacer match con GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);    
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.html());
        // console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div')
        expect(div.hasClass('animate__fadeIn')).toBe(true);
        // console.log(div.hasClass('animate__fadeIn'))

        // SOLUCIÓN FH
        // const div = wrapper.find('div')
        // const className = div.prop('className');
        // expect(className.includes('animate__fadeIn')).toBe(true)
        // expect(className.includes('animate__fadeIn')).not.toBe(false)
    });
});