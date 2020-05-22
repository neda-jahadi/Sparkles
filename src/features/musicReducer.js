import {createReducer, createAction} from '@reduxjs/toolkit';

const addToList = createAction('add to list');
const editList = createAction('edit list');
const removeFromList = createAction('remove from list');
const musicListActions = {
    addToList,
    editList,
    removeFromList
}

const musicList = [
    {title: 'Sagan om ringen två', creator: 'JRR Tolkien', rating:'2', usedBefore:'no', comment: 'Kan den här vara bra?'},
    {title: 'Jag En', creator: 'David Leviathan', usedBefore:'yes', rating:'4', comment: 'Läs den!'},
    {title: 'Jag Två', creator: 'David Leviathan', usedBefore:'yes', rating:'3', comment: 'Läs den!'},
    {title: 'Jag Tre', creator: 'David Leviathan', usedBefore:'yes', rating:'2', comment: 'Läs den!'},
    {title: 'Jag Fyra', creator: 'David Leviathan', usedBefore:'yes', rating:'5', comment: 'Läs den!'},
];



const reducer = createReducer(musicList, {
    [addToList]: (state, action) => [...state, action.payload],
	[removeFromList]: (state, action) => state.filter(item => item.title !== action.payload)
})

export { reducer, musicListActions };