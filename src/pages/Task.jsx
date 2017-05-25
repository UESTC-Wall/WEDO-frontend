import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import { bootstrapUtils } from "react-bootstrap/lib/utils";

import TaskFlow from "./../components/TaskFlow";
import "./Task.css";

bootstrapUtils.addStyle(FormGroup, 'custom');

class Task extends Component {
  render() {
    return (
      <div className="task-page">
        <FormGroup controlId="formValidationNull" validationState={null} bsSize="large" bsStyle="custom">
          <FormControl type="text" placeholder="添加任务..." />
        </FormGroup>
        <TaskFlow />
      </div>
    );
  }
}

export default Task;
