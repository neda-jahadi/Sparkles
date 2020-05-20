import {createReducer, createAction} from '@reduxjs/toolkit';

const categoryDisplayed = 'music';

const choseMusic = createAction('music');
const choseBooks = createAction('books');
const choseMovies = createAction('movies');

const categoryActions = {
    choseMusic,
    choseBooks,
    choseMovies
}



const reducer = createReducer(categoryDisplayed, {
    [choseMusic]: ()=> 'music',
    [choseBooks]: ()=> 'books',
    [choseMovies]: ()=> 'movie'
});

export { reducer , categoryActions };