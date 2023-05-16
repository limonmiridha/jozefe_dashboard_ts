import React, { useState } from 'react';
import Select from 'react-select';

const SelectInput = ({ data }: any) => {
  const [selectedOption, setSelectedOption] = useState(data[0]);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: '#F5F5F5',
      borderRadius: '4px',
      border: '0px',
      // borderColor: state.isFocused ? '#00BFFF' : '#D3D3D3',
      boxShadow: state.isFocused ? '0 0 0 1px #929292' : null,
      padding: '6px 0',
    }),

    option: (provided: any) => ({
      ...provided,
      backgroundColor: '#FFFFFF',
      color: '#8d8d8d',
      // color: state.isSelected ? '#FFFFFF' : '#8d8d8d',
      ':hover': {
        backgroundColor: '#F5F5F5',
        cursor: 'pointer',
      },
    }),
  };

  return (
    <div className="">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={data}
        styles={customStyles}
        formatOptionLabel={(data) => (
          <div className="flex gap-3">
            {data.image && (
              <img
                src={data.image}
                width={20}
                height={21}
                alt="country-image"
              />
            )}
            <span className="">{data.label}</span>
          </div>
        )}
      />
    </div>
  );
};

export default SelectInput;
