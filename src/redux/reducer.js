import {ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS, SHOW_ALL_FAVS } from './actions.js'

const initialState = {
    myFavorites: [],
    sortedCharacters: []
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case ADD_FAVORITE:
            return {myFavorites: [...state.myFavorites, action.payload], sortedCharacters: [...state.sortedCharacters, action.payload]}
        case DELETE_FAVORITE:
            return {myFavorites: [...state.myFavorites].filter((personaje)=> personaje.id !== action.payload),
                sortedCharacters: [...state.myFavorites].filter((personaje)=> personaje.id !== action.payload)}
        case FILTER_CARDS:
            return {...state, sortedCharacters: state.myFavorites.filter((character)=> character.gender === action.payload)}
        case ORDER_CARDS:
            console.log(state.sortedCharacters);
            if (action.payload === 'Ascendente'){
                return {...state, sortedCharacters: state.sortedCharacters.sort((a, b)=> a.id-b.id)}
            }
            else {
                return {...state, sortedCharacters: state.sortedCharacters.sort((a, b)=> b.id-a.id)}
            }
        case SHOW_ALL_FAVS:
            return {...state, sortedCharacters: [...state.myFavorites]}
        default:
            return {...state}
    }
}