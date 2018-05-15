import React from "react";
import TaskItem from "./TaskItem";
import createData from "../createData";

function TasksPanel(props) {
  let taskItems = [];
  taskItems = props.tasks.map((t) => {
    return <TaskItem task={t} />;
  });
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-clock-o fa-fw" /> Tasks Panel</h3>
      </div>
      <div className="panel-body">
        <div className="list-group">
    
            {taskItems}
                
                
          </div>
        <div className="text-right">
            <a href="#">View All Activity <i className="fa fa-arrow-circle-right" /></a>
          </div>
      </div>
      <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-clock-o fa-fw" /> Create New</h3>
      </div>
      <div className="panel-body">
        <div className="list-group">
    
               Name: <input id="taskName" />
               Date: <input id="taskDate" />
            <button onClick={
                () => {
                  const task = document.getElementById("taskName").value;
                  const date = document.getElementById("taskDate").value;
                  createData.task({task,date});
                }
               }>Create</button>
                 
          </div>
      </div>

    </div>);
}

export default TasksPanel;
