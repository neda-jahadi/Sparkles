import {createReducer, createAction} from '@reduxjs/toolkit';

const addToMusicList = createAction('add to music list');
const editMusicList = createAction('edit music list');
const removeFromMusicList = createAction('remove from music list');
const musicListActions = {
    addToMusicList,
    editMusicList,
    removeFromMusicList
}

const musicList = [
    {title: 'Sagan om ringen två', creator: 'JRR Tolkien', rating:'2', usedBefore:'no', comment: 'Kan den här vara bra?'},
    {title: 'Jag En', creator: 'David Leviathan', usedBefore:'no', rating:'4', comment: 'Läs den!'},
    {title: 'Jag Två', creator: 'David Leviathan', usedBefore:'yes', rating:'3', comment: 'Läs den!'},
    {title: 'Jag Tre', creator: 'David Leviathan', usedBefore:'no', rating:'2', comment: 'Läs den!'},
    {title: 'Jag Fyra', creator: 'David Leviathan', usedBefore:'yes', rating:'5', comment: 'Läs den!'},
];



const reducer = createReducer(musicList, {
    [addToMusicList]: (state, action) => [...state, action.payload],
	[removeFromMusicList]: (state, action) => state.filter(item => item.title !== action.payload)
})

export { reducer, musicListActions };