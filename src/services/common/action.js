import actionType from "./actionTypes";
import axios from "axios";


// Action for Login for user and merchant  //

export const LoginService = (payload, accessPayload) => dispatch => {
     const config = {
        method: 'post',
        url: "EXAMPLE URL",
        data: payload,
        headers: {
            'Content-Type': 'application/json',
        }
    };
    axios(config).then((res) => {
         if (res.status === 200) {
            if (res.data) {
                dispatch({
                    type: actionType.LOGIN_SUCCESS,
                    payload: res.data,
                });
            }
        } else if (res.status === 206) {
            toastr.warning(res.data.message)
            dispatch({
                type: actionType.LOGIN_FAILURE,
            })
        }
    }).catch(error => {
         toastr.error(error.response.data.message);
        dispatch({
            type: actionType.LOGIN_FAILURE,
        });
    });
};




