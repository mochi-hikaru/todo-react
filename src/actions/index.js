import axios from 'axios';

const url = "http://localhost:8000/api/task";

export const getTodo = () => {
    return dispatch => {      
        axios.get(url).then( res => {
            dispatch({type: "SHOW", todo: res.data});
        });
    }
}

export const addTodo = (value) => {
    return dispatch => {
        axios.post(url, value);
    }
}