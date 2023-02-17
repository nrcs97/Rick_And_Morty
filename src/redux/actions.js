export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const FILTER_CARDS = 'FILTER_CARDS'
export const ORDER_CARDS = 'ORDER_CARDS'
export const SHOW_ALL_FAVS = 'SHOW_ALL_FAVS'

export const addFavorite = (personaje)=> {return {type: ADD_FAVORITE, payload: personaje}}
export const deleteFavorite = (id)=> {return {type: DELETE_FAVORITE, payload: id}}
export const filterCards = (status)=> {return {type: FILTER_CARDS, payload: status}}
export const orderCards = (id)=> {return {type: ORDER_CARDS, payload: id}}
export const showAllFavs = ()=> {return {type: SHOW_ALL_FAVS}}