import React, { Component } from 'react';
import BroadcastItem from './BroadcastItem';

class Broadcasts extends Component {
  render() {
    let broadcastItems;
    if(this.props.broadcasts){
        broadcastItems = this.props.broadcasts.map(broadcast => {
            return (
                <BroadcastItem key={broadcast.id} broadcast={broadcast}/>
            );                                                 
        });
    }
    return (
      <div id="broadcastContainer" className="Broadcasts,row">
        <ul>
        {broadcastItems}
        </ul>
      </div>
    );
  }
}

export default Broadcasts;
