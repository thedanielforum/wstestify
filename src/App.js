import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Messages from './components/Messages'
import Url from './components/Url'
import Editor from './components/Editor'
import Footer from './components/Footer'
import moment from 'moment'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import './app.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      open: false,
      message: '',
      messages: [],
    };

    this.timeFormat = "ddd D MMM YYYY, HH:mm:ss";

    this.onConnect = this.onConnect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onMessageSend = this.onMessageSend.bind(this);
  }

  onConnect(e) {
    e.preventDefault();
    // Connect to web-socket
    this.connection = new WebSocket(this.state.url);
    // Listen to onchange event
    this.connection.onmessage = (msg) => {
      this.setState({
        messages: this.state.messages.concat([{
          sent: false,
          timestamp: moment().format(this.timeFormat),
          data: msg.data
        }])
      });
    };
    this.connection.onopen = () => {
      this.setState({ open: true });
      NotificationManager.success('Socket connected');
    };
    this.connection.onclose = (err) => {
      this.setState({ open: false });
      console.log(err);
      NotificationManager.error('Socket closed');
    };
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onMessageSend(e) {
    e.preventDefault();
    if (this.connection !== undefined) {
      this.connection.send(this.state.message);
      this.setState({
        messages: this.state.messages.concat([{
          sent: true,
          timestamp: moment().format(this.timeFormat),
          data: this.state.message
        }])
      });
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <Header/>
        <section className="bg-light ws-container">
          <Url
            onConnect={this.onConnect}
            onChange={this.onChange}
            url={this.state.url}
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Editor
                  onChange={this.onChange}
                  onMessageSend={this.onMessageSend}
                  text={this.state.message}
                  sendDisabled={this.state.open}
                />
              </div>
              <div className="col-lg-6">
                <Messages
                  messages={this.state.messages}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
