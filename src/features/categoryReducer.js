import {createReducer, createAction} from '@reduxjs/toolkit';

const categoryDisplayed = '';

const choseMusic = createAction('music');
const choseBooks = createAction('books');
const choseMovies = createAction('movies');

const categoryActions = {
    choseMusic,
    choseBooks,
    choseMovies
}



const reducer = createReducer(categoryDisplayed, {
    [choseMusic]: choseMusic,
    [choseBooks]: choseBooks,
    [choseMovies]: choseMovies
});

export { reducer , categoryActions };