import {createReducer, createAction} from '@reduxjs/toolkit';

const addToList = createAction('add to list');
const editList = createAction('edit list');
const removeFromList = createAction('remove from list');
const listActions = {
    addToList,
    editList,
    removeFromList
}

const musicList = [
    {title: 'Sagan om ringen', creator: 'JRR Tolkien', usedBefore:false, comment: 'Kan den här vara bra?'},
    {title: 'bag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
    {title: 'aag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
    {title: 'xag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
    {title: 'cag En', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
];



const reducer = createReducer(musicList, {
    [addToList]: (state, action) => [...state, action.payload],
	[removeFromList]: (state, action) => state.filter(item => item.id !== action.payload.id)
})

export { reducer, listActions };