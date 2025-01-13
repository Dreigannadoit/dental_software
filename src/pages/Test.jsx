import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'None', label: 'None' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const Test = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selected) => {
        if (selected && selected.some(option => option.value === 'None')) {
            // If "None" is selected, remove all other values and keep only "None"
            setSelectedOptions([{ value: 'None', label: 'None' }]);
        } else {
            // Otherwise, update the selected options
            setSelectedOptions(selected || []);
        }
    };

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
        />
    );
};

export default Test;
