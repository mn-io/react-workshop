import React from 'react';

export default class HeaderComponent extends React.Component {
  render() {
    const name = this.props.name
    return `Hello ${name} :)`
  }
}