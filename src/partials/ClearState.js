import React, { Component } from 'react';

class ClearState extends Component {
  
  render() {
    const {buttonClass} = this.props;
    var clearState = this.props.clearState;
    return (
        <button className={`btn btn-outline-secondary ${buttonClass}`} onClick={() => clearState()}>
              Clear this side
        </button>
    );
  }
}


export default ClearState;






                     