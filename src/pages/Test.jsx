import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Test = () => (
    <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[options[4], options[5]]}
        isMulti
        options={options}
    />
)
export default Test;
