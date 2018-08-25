import React from "react";

function DonutChart(props) {
    const foxStyle = {
        width: "96%",
        marginLeft: "2%"
    }
  return (
    <div className="col-lg-4">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-long-arrow-right fa-fw"></i> Fox of the Day</h3>
            </div>
            <div className="panel-body">
            <img src={props.foxes} style={foxStyle}/>
            </div>
        </div>
    </div>);
}

export default DonutChart;