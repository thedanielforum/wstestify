import React from 'react'
import PropTypes from 'prop-types'
import Message from '../Message'
import shortid from 'shortid'

class Messages extends React.Component {
  componentDidUpdate() {
    // Scroll to bottom
    const scrollHeight = this.messagesContainer.scrollHeight;
    const height = this.messagesContainer.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messagesContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    return (
      <div className="hpanel">
        <div className="panel-body no-padding">
          <div
            className="chat-discussion"
            ref={(el) => {
              this.messagesContainer = el;
            }}
          >
            {this.props.messages.map((message) => {
              return(
                <Message
                  key={shortid.generate()}
                  sent={message.sent}
                  timestamp={message.timestamp}
                  msg={message.data}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages
