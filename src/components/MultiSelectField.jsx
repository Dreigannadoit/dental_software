import React from 'react'
import Select from 'react-select';

import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MultiSelectField = ({
    closeMenuOnSelect,
    options,
    method,
    value
}) => {
    return (
        <Select
            closeMenuOnSelect={closeMenuOnSelect}
            components={animatedComponents}
            isMulti
            options={options}
            onChange={method}
            value={value}
        />
    )
}

export default MultiSelectField