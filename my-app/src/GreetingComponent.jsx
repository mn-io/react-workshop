import React from 'react';

export default class FormComponent extends React.Component {
  render() {
    const name = this.props.name
    return `Hello ${name} :)`
  }
}