import {createReducer, createAction} from '@reduxjs/toolkit';

const addToList = createAction('add to list');
const editList = createAction('edit list');
const removeFromList = createAction('remove from list');
const moviesListActions = {
    addToList,
    editList,
    removeFromList
}

const moviesList = [
    {title: 'Jag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
    {title: 'Jag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},

];



const reducer = createReducer(moviesList, {
    [addToList]: (state, action) => [...state, action.payload],
	[removeFromList]: (state, action) => state.filter(item => item.id !== action.payload.id)
})

export { reducer, moviesListActions };