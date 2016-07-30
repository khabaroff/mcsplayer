import React, {Component, PropTypes} from 'react'

import Input from '../components/Input'

function Contact(props) {
  return (
      <div className="Contact">
        <Input label='Name' onUpdate={this.props.handleNameUpdate}/>
        <Input label='Value' onUpdate={this.props.handleValueUpdate}/>
      </div>
    )
}

export default Contact
