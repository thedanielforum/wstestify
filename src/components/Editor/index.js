import React from 'react'
import PropTypes from 'prop-types'

class Editor extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <textarea
              className="form-control message-input"
              rows={22}
              name="message"
              value={this.props.text}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              className="btn btn-info btn-block btn-send"
              onClick={this.props.onMessageSend}
              disabled={!this.props.sendDisabled}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onMessageSend: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  sendDisabled: PropTypes.bool.isRequired
};

export default Editor
