import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">24 sek</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Heim</a></li>
          <li><a href="#">Fréttir</a></li>
          <li><a href="#">Leikir og úrslit</a></li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default NavBar;
