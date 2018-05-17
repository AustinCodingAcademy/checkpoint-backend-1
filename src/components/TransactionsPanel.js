import React from "react";
import TransactionRow from "./TransactionRow";
import createData from "../createData";

function TransactionsPanel(props) {
  let transactions = [];
  transactions = props.orders.map((trans) => {
    return <TransactionRow order={trans} />;
  });
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-money fa-fw" /> Transactions Panel</h3>
      </div>
      <div className="panel-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Order Date</th>
                <th>Order Time</th>
                <th>Amount (USD)</th>
              </tr>
            </thead>
            <tbody>
              {transactions}
            </tbody>
          </table>
        </div>
        <div className="text-right">
          <a href="#">View All Transactions <i className="fa fa-arrow-circle-right" /></a>
        </div>
      </div>
      <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-clock-o fa-fw" /> Create New</h3>
      </div>
      <div className="panel-body">
        <div className="list-group">
    
               Order Date: <input id="orderDate" />
               Order Time: <input id="orderTime" />
               Amount: <input id="orderAmount" />
          <button onClick={
                () => {
                  const date = document.getElementById("orderDate").value;
                  const time = document.getElementById("orderTime").value;
                  const amount = document.getElementById("orderAmount").value;
                  createData.order({orderDate: date, orderTime: time, amount});
                }
               }>Create</button>
                 
        </div>
      </div>
    </div>);
}

export default TransactionsPanel;
