import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import App from '@/components/app'
class AppContainer extends Component {
  render () {
    return (
      <App {...this.props} />
    )
  }
}

export default withRouter(connect()(AppContainer))
