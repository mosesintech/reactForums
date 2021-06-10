import React from 'react';

export default function Input({ name, type, values, onChange }) {
  return (
    <>
      <label htmlFor={name}>
        {name}
        <input
          name={name}
          type={type}
          values={values}
          onChange={onChange}
          placeholder={name}
        />
      </label>
    </>
  );
}
