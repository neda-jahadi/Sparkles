import {createReducer, createAction} from '@reduxjs/toolkit';

const addToMoviesList = createAction('add to movies list');
const editMoviesList = createAction('edit movies list');
const removeFromMoviesList = createAction('remove from movies list');
const moviesListActions = {
    addToMoviesList,
    editMoviesList,
    removeFromMoviesList
}

const moviesList = [
    {title: 'Jag fem', creator: 'David Leviathan', rating:'1', usedBefore:'no', comment: 'Läs den!'},
    {title: 'Jag sex', creator: 'David Leviathan', rating:'2', usedBefore:'yes', comment: 'Läs den!'},

];



const reducer = createReducer(moviesList, {
    [addToMoviesList]: (state, action) => [...state, action.payload],
	[removeFromMoviesList]: (state, action) => state.filter(item => item.title !== action.payload)
})

export { reducer, moviesListActions };