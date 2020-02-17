import actionType from "./actionTypes";
import axios from "axios";


// Action for Login for user and merchant  //

export const userActions = () => dispatch => {
     const config = {
        method: 'get',
        url: "https://jsonplaceholder.typicode.com/users",
        headers: {
            'Content-Type': 'application/json',
        }
    };
    axios(config).then((res) => {
         if (res.status === 200) {
            if (res.data) {
                dispatch({
                    type: actionType.USER,
                    payload: res.data,
                });
            }
        } else if (res.status === 206) {
            dispatch({
                type: actionType.LOGIN_FAILURE,
            })
        }
    }).catch(error => {
        dispatch({
            type: actionType.LOGIN_FAILURE,
        });
    });
};




