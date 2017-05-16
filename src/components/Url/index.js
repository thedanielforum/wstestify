import React from 'react'

class Url extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="url"
                onChange={this.props.onChange}
                value={this.props.url}
                placeholder="ws://api.restestify.com/ws/hub"
                autoFocus={true}
              />
            </div>
          </div>
          <div className="col-lg-2">
            <button
              className="btn btn-success btn-block"
              type="button"
              onClick={this.props.onConnect}
              disabled={!this.props.url.length}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Url.propTypes = {
  onConnect: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  url: React.PropTypes.string.isRequired,
};

export default Url
