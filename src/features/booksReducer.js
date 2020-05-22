import {createReducer, createAction} from '@reduxjs/toolkit';

const addToList = createAction('add to list');
const editList = createAction('edit list');
const removeFromList = createAction('remove from list');
const booksListActions = {
    addToList,
    editList,
    removeFromList
}

const booksList = [
    {title: 'Astrid lindgren', creator: 'Kalle', usedBefore:true, comment: 'Apläskig'},
    {title: 'Sagan om ringen', creator: 'JRR Tolkien', usedBefore:false, comment: 'Kan den här vara bra?'},
    {title: 'Jag sju', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
    {title: 'Jag åtta', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
    {title: 'Jag nio', creator: 'David Leviathan', usedBefore:true, comment: 'Läs den!'},
];



const reducer = createReducer(booksList, {
    [addToList]: (state, action) => [...state, action.payload],
	[removeFromList]: (state, action) => state.filter(item => item.title !== action.payload)
})

export { reducer, booksListActions };
