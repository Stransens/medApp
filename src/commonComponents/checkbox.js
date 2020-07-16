import React from 'react';
import {SvgElement} from './svgElement';

const CheckBox = ({ state }) => {
    return (
            <SvgElement name='Check' width={24} height={24} fill={state ? 'tomato' : '#fff'} />
    );
};

export default CheckBox;
