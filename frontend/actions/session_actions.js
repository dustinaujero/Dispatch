import * as UserAPIUtil from '../util/api_user_util';


export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const loginCurrentUser = (user) => {
    return {
        type: LOGIN_CURRENT_USER,
        user
    };
}

export const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
)

export const receiveSessionErrors = (errors) => (
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
)

export const clearSessionErrors = () => (
    {
        type: CLEAR_SESSION_ERRORS
    }
)

export const signup = (user) => dispatch => (
    UserAPIUtil.signup(user).then(
        (newUser) => dispatch(loginCurrentUser(newUser)),
        (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
    )
)

export const login = (user) => dispatch => (
    UserAPIUtil.login(user).then(
        (newUser) => dispatch(loginCurrentUser(newUser)),
        (errors) => dispatch(receiveSessionErrors(errors.responseJSON))

    )
)

export const logout = (user) => dispatch => (
    UserAPIUtil.logout(user).then(
        () => dispatch(logoutCurrentUser()),
        (errors) => dispatch(receiveSessionErrors(errors.responseJSON))

    )
)


