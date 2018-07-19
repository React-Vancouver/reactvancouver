import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MeetupGroup extends Component {
  state = {
    group: null,
  }
  componentDidMount() {
    fetch('https://meetuprv.now.sh')
      .then(res => res.json())
      .then(json => this.setState({ group: json }))
  }
  render() {
    return this.props.children(this.state.group)
  }
}

MeetupGroup.propTypes = {
  children: PropTypes.func.isRequired,
}
