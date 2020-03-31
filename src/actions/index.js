import axios from 'axios';

const url = "http://localhost:8000/api/task";

export const getTodo = () => {
    return async dispatch => {      
        await axios.get(url).then( res => {
            console.log(res.config);
            dispatch({type: "SHOW", todo: res.data});
        });
    }
}

export const addTodo = (value) => {
    return  async dispatch => {
        await axios.post(url, {task: value});
           
        axios.get(url).then( res => {
            dispatch({type: "SHOW", todo: res.data});
        });
    };
}