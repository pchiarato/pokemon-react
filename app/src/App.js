import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getPokemon } from './ducks/pokemon';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {}

  }

  componentDidMount() {
    this.props.getPokemon()
  }
  render() {
    const pokeMonster = this.props.pokemon.map((pokemon, i) => {return<li className="list-group-item" key={i}>{pokemon.name}</li>})
    return (
      <div className="container">
          <h1>Pokemon List</h1>
        <ul className="list-group">
          {pokeMonster}
        </ul>
      </div>
    );
  }
}

let mapStateToProps= (state) =>{
  return {pokemon: state.pokemon}
}

export default connect(mapStateToProps, {getPokemon})(App);
