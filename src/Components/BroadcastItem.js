import React, { Component } from 'react';

class BroadcastItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li className="Broadcast">
        {this.props.broadcast.date} - {this.props.broadcast.homeTeam} - {this.props.broadcast.awayTeam} - {this.props.broadcast.league}
      </li>
    );
  }
}

export default BroadcastItem;
