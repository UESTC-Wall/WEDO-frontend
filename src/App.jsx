import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";
import { bootstrapUtils } from "react-bootstrap/lib/utils";
import { Link } from "react-router";
import "./App.css";

bootstrapUtils.addStyle(Navbar, 'custom');

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bsStyle="custom">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={"/"}>WEDO</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
              登录
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
