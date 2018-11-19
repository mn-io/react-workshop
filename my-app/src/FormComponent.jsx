import React from 'react';

export const FormComponent = (props) => {
  return <input type='text'
    style={{ height: '1rem', marginTop: '1rem' }}
    onKeyUp={
      props.handleOnKeyUp
    }>
  </input>
}