import React, { useState } from 'react';

export interface IFilterValue {
  id: string;
  value: string;
}

interface FilterProps {
  data: IFilterValue[];
  handleChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ data, handleChange }) => {
  const selectedValue: string = data[0] ? data[0].value : '';
  const [value, setValue] = useState<string>(selectedValue);

  const options = data.map((item) => <option value={item.id}>{item.value}</option>);

  const internalHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    handleChange(targetValue);
  };

  return (
    <select value={value} onChange={internalHandleChange}>
      {options}
    </select>
  );
};

export default Filter;
