import React, { Component } from 'react';
import Broadcasts from './Components/Broadcasts';
import NavBar from './Components/NavBar';


import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
          broadcasts:[],
          dropDownItems:[]
      }
  }
    
  componentWillMount(){
      this.setState({broadcasts: [
            {
                  id: '1',
                  date: '18.10.2017',
                  homeTeam: 'Haukar',
                  awayTeam: 'Valur',
                  league: 'Dominos deild kvenna'
              },
              {
                  id: '2',
                  date: '25.10.2017',
                  homeTeam: 'Keflavík',
                  awayTeam: 'Skallagrímur',
                  league: 'Dominos deild kvenna'
              },
              {
                  id: '3',
                  date: '28.10.2017',
                  homeTeam: 'Njarðvík',
                  awayTeam: 'Breiðablik',
                  league: 'Dominos deild kvenna'
              },
              {
                  id: '4',
                  date: '19.10.2017',
                  homeTeam: 'Höttur',
                  awayTeam: 'Valur',
                  league: 'Dominos deild karla'
              },
              {
                  id: '5',
                  date: '20.10.2017',
                  homeTeam: 'Njarðvík',
                  awayTeam: 'Stjarnan',
                  league: 'Dominos deild karla'
              },
              {
                  id: '6',
                  date: '26.10.2017',
                  homeTeam: 'Haukar',
                  awayTeam: 'Keflavík',
                  league: 'Dominos deild karla'
              },
              {
                  id: '7',
                  date: '27.10.2017',
                  homeTeam: 'Grindavík',
                  awayTeam: 'Tindastóll',
                  league: 'Dominos deild karla'
              }],
              dropDownItems:[
                  {
                      href: '#',
                      name: 'Overview'
                  },
                  {
                      href: '#',
                      name: 'Setup'
                  }
              ]
      
      });
      
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Broadcasts broadcasts={this.state.broadcasts}/>
      </div>
    );
  }
}

export default App;
