import { auth, provider } from '../config/firebase'
import { SET_USER } from './actionTypes'

export function setUser(payload) {
	return {
		type: SET_USER,
		payload: payload
	}
}

export function signInAPI() {
	return (dispatch) => {
		auth.signInWithPopup(provider).then((payload) => {
			dispatch(setUser(payload.user));
		}).catch((error) => {
			alert(error.message)
		})
	}
}


