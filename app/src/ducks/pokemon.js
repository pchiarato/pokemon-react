import axios from 'axios'

const GET_POKE = 'GET_POKE'

const initialState = {
    pokemon: []
}

const pokeData = axios.get('http://pokeapi.co/api/v2/pokemon')
    .then(response => response.data.results);

export let getPokemon = () => {
    return{
        type:GET_POKE,
        payload: pokeData
    }
}

let reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKE + '_FULFILLED':
            console.log('in reducer', action.payload)
            return Object.assign({}, state, {pokemon: action.payload});
        default:
            return state;
    }
    
}

export default reducer;


