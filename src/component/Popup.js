import React, { Component } from 'react';
import './Popup.css';
class Popup extends Component {
  render() {
    const { onCancelHandler, onConfirmHandler, totalBillingAmount } = this.props;
    return (
      <div className="popup">
        <h1>Your Total Price:{totalBillingAmount}</h1>
        <button className="cinfirm-btn" onClick={onConfirmHandler}>Payment</button>
        <button className="cinfirm-btn" onClick={onCancelHandler}>Cancel</button>
      </div>
    );
  }
}

export default Popup;