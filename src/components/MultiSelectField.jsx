import React from 'react'
import Select from 'react-select';

import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const MultiSelectField = ({
  options,
  value,
  onChange,
  closeMenuOnSelect,
}) => {
  // Filter out options where the value is an empty string
  const filteredOptions = options.filter(option => option.value);

  return (
    <Select
      isMulti
      options={filteredOptions}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      onChange={onChange}
      value={value}
    />
  );
};

export default MultiSelectField