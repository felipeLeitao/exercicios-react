import React, { Component } from 'react'

export default class ClassComponent extends Component {
    render()
    {
      let number = this.props.value++
      return (
          <h1>{this.props.value} - {this.props.id} </h1>
        )
    }
} 
