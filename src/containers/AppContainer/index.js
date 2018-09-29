import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import App from 'components/App'

class AppContainer extends React.Component {
  render() {
    const { children } = this.props
    return (
      <App children={children} />
    )
  }
}

export default withRouter(connect()(AppContainer))
