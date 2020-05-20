import {createReducer, createAction} from '@reduxjs/toolkit';

const addToList = createAction('add to list');
const editList = createAction('edit list');
const removeFromList = createAction('remove from list');
const listActions = {
    addToList,
    editList,
    removeFromList
}

const intialState = [
    {titel: 'Lida', creator: 'Stephen King', usedBefore:true, comment: 'Apläskig'},
    {titel: 'Sagan om ringen', creator: 'JRR Tolkien', usedBefore:false, comment: 'Kan den här vara bra?'},
    {titel: 'Jag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'}
];

const reducer = createReducer(intialState, {
    [addToList]: (state, action) => [...state, action.payload],
	[removeFromList]: (state, action) => state.filter(item => item.id !== action.payload.id)
})

export { reducer, listActions };