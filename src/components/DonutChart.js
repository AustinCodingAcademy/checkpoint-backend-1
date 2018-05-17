import React from "react";

function DonutChart(props) {

  const style = {
    width: "100%"
  };

  return (
    <div className="col-lg-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <i className="fa fa-long-arrow-right fa-fw" /> Fox of the Day</h3>
        </div>
        <div className="panel-body">
          <img src={props.foxes} style={style} />
        </div>
      </div>
    </div>);
}

export default DonutChart;
