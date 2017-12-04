const logger = require('../../logs/logger');
const login = require('../../actions/authentication/login');
const logout = require('../../actions/authentication/logout');
const cookieLogin = require('../../actions/authentication/cookieLogin.js');

const authListeners = (socket) => {
	socket.on('login', async (user) => {
		logger.info(`Login user with: ${JSON.stringify(user)}`);
		const response = await login(user);
		if (response.error) {
			socket.emit('notify_error', response);
		} else {
			socket.emit('login', response);
			logger.succes('Login user');
		}
	});

	socket.on('loginWithCookie', async (cookie) => {
		logger.info(`Login user with cookie: ${JSON.stringify(cookie)}`);
		const response = await cookieLogin(cookie);
		if (response.error) {
			socket.emit('notify_error', response);
			socket.emit('loginWithCookie', false);
		} else {
			socket.emit('loginWithCookie', response);
			logger.succes('Login user with cookie');
		}
	});

	socket.on('logout', async (cookie) => {
		logger.info(`Logout user with cookie: ${JSON.stringify(cookie)}`);
		const response = await logout(cookie);
		if (response.error) {
			socket.emit('notify_error', response);
		} else {
			socket.emit('logout', response);
			logger.succes('Logout user');
		}
	});
};

module.exports = authListeners;