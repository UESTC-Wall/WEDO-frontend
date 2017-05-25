import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router";
import "./Task.css";

class Task extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={"task"}>WEDO</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            登录
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Task;
