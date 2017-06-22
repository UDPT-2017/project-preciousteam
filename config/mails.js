const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
			type: 'OAuth2',
			user: 'nghoangthi1@gmail.com',
			clientId: '837505342874-nqljjtguobeau19p797ispd3cit0l6pe.apps.googleusercontent.com',
			clientSecret: '5Z4e_UIarxR0YK073696pOu9',
			refreshToken: '1/yBCWd9acGyGt0nn0I-5Hq-IyfmeYuugNhGzyMnbhx2A'

	}
});

module.exports = transporter;