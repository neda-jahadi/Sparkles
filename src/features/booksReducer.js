import {createReducer, createAction} from '@reduxjs/toolkit';

const addToBooksList = createAction('add to book list');
const editBooksList = createAction('edit to book list');
const removeFromBooksList = createAction('remove from book list');

const booksListActions = {
    addToBooksList,
    editBooksList,
    removeFromBooksList
}

const booksList = [
    {title: 'Astrid lindgren', creator: 'Kalle', rating:'5', usedBefore:'yes', comment: 'Apläskig'},
    {title: 'Sagan om ringen', creator: 'JRR Tolkien', usedBefore:false, comment: 'Kan den här vara bra?'},
    {title: 'Jag sju', creator: 'David Leviathan', rating:'1', usedBefore:'yes', comment: 'Läs den!'},
    {title: 'Jag åtta', creator: 'David Leviathan', rating:'4', usedBefore:'no', comment: 'Läs den!'},
    {title: 'Jag nio', creator: 'David Leviathan', rating:'3', usedBefore:'no', comment: 'Läs den!'},
];



const reducer = createReducer(booksList, {
    [addToBooksList]: (state, action) => [...state, action.payload],
	[removeFromBooksList]: (state, action) => state.filter(item => item.title !== action.payload)
})

export { reducer, booksListActions };
