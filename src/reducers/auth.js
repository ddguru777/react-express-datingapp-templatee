export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				uid: action.uid,
				isOnboarding: action.isOnboarding 
			};
		case 'LOGOUT':
			return {
				uid: false
			};
		default:
			return state;
	}
};
