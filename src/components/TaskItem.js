import React from "react";

function TaskItem(props) {
  return (
    <a href="#" className="list-group-item">
    <span className="badge">{props.task.task}</span>
    <i className="fa fa-fw fa-calendar"></i> {props.task.date}
</a>);
}

export default TaskItem;