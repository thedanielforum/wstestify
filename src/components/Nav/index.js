import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href={void(0)} className="navbar-brand">WsTestify</a>
            <div className="brand-desc">
              WebSocket development tool
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
