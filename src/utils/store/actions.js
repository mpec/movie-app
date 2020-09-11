import ACTIONS from './actionTypes'

const loadMoviesInProgress = () => ({
    type: ACTIONS.LOAD_MOVIES_IN_PROGRESS
});

const loadMoviesSuccess =  movies=> ({
    type: ACTIONS.LOAD_MOVIES_SUCCESS,
    payload:{
        movies
    }
});

const loadMoviesFailure = () => ({
    type: ACTIONS.LOAD_MOVIES_FAILURE
});

const setAddModalVisbility = (visible) => ({
    type: ACTIONS.SET_ADD_MODAL_VISIBILITY,
    payload:{
        visible: visible
    }
});

export { loadMoviesInProgress, loadMoviesSuccess, loadMoviesFailure, setAddModalVisbility };