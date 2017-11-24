const logger = require('../../logs/logger');

const none = { error: false };

const noCookie = { error: 'You have no session cookie, please login', type: 'hidden' };

const invalidePassword = { error: ['Invalide password'] };

const userNotFound = { error: ['Incorrect login or e-mail'] };

const database = (e) => {
	logger.error(`Database error in models/auth.js => ${e}`);
	return { error: ['Error, please try again later'] };
};

module.exports = {
	database,
	none,
	userNotFound,
	invalidePassword,
	noCookie
};
