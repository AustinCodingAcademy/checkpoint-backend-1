import React from "react";

function DonutChart(props) {

   
  return (
    <div className="col-lg-4">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-long-arrow-right fa-fw"></i> Fox of the Day</h3>
            </div>
            <div className="panel-body">
            <img style={{"max-height" : "100%", "max-width" : "100%"}} src={props.foxes} />
            </div>
        </div>
    </div>);
}

export default DonutChart;