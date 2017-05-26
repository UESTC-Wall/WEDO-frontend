import React, { Component } from "react";
import Mock from "mockjs";

import PerTaskItem from "./PerTaskItem";
import "./TaskFlow.css";

class TaskFlow extends Component {
  render() {
    return (
      <div className="task-flow">
        <div className="task-card">
          <div className="task-intro">
            <p className="task-name">{Mock.Random.cword(2, 8)}</p>
            <p className="task-simple-intro">{Mock.Random.cword(5, 16)}</p>
            <p className="task-owner">发起人：<span className="task-owner-name">{Mock.Random.cname()}</span></p>
          </div>
          <div className="task-list">
            <PerTaskItem finished />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskFlow;
