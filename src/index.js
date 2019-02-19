import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {getData} from "./getData";

window.onload = function(){
  setTimeout(load, 10);

};

function load(){
  getData((data)=>{
    render(data);
  });
}

function render(data){

  const {
    dateTime,
    newComments,
    newTasks,
    newOrders,
    tickets,
    orders,
    taskItem,
    tasks,
    messages,
    foxes
    } = data;

    

  ReactDOM.render(
    <App 
      taskItem={taskItem}
      dateTime={dateTime}
      newComments={newComments}
      newTasks={newTasks}
      newOrders={newOrders}
      tickets={tickets}
      orders={orders} 
      tasks={tasks}
      messages={messages}
      foxes={foxes}
      />,
    document.getElementById("root")
  );
}


