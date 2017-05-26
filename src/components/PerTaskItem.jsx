import React, { Component } from "react";
import Mock from "mockjs";
import PropTypes from "prop-types";

import "./PerTaskItem.css";

class PerTaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.finished === true) {
      return (
        <li className="finished-task"><div className="finished-symble">✓</div>{Mock.Random.cword(2, 16)}</li>
      );
    } else {
      return (
        <li className="unfinished-task">
          <div className="unfinished-symble" />{Mock.Random.cword(2, 16)}
          <span>增加状态</span>
        </li>
      );
    }
  }
}

PerTaskItem.propTypes = {
  finished: PropTypes.bool
};

PerTaskItem.defaultProps = {
  finished: false
};

export default PerTaskItem;
