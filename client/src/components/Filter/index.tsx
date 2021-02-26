import React from 'react';

export interface IFilterValue {
  id: string;
  value: string;
}

interface FilterProps {
  value: string;
  data: IFilterValue[];
  handleChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ value, data, handleChange }) => {
  const selectedValue: string = value === '' && data[0] ? data[0].value : value;

  const options = data.map((item) => <option value={item.id}>{item.value}</option>);

  const internalHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetValue = e.target.value;
    handleChange(targetValue);
  };

  return (
    <select value={selectedValue} onChange={internalHandleChange}>
      {options}
    </select>
  );
};

export default Filter;
