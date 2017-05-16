import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Message extends React.Component {
  render() {
    return (
      <div className="chat-message left">
        <div className="message">
          <span className={classnames("message-author", {
            "text-info": this.props.sent === true,
            "text-danger": this.props.sent === false
          })}>
            {this.props.sent ? "Sent" : "Received"}
          </span>
          <span className="message-date">
            {this.props.timestamp}
          </span>
          <span className="message-content">
            {this.props.msg}
          </span>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  sent: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  timestamp: PropTypes.string
};

export default Message
