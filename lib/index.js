/**
 * sails-generate-views-pug
 *
 * Usage:
 * `sails generate views-pug`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./views/403.pug': { copy: '403.pug' },
		'./views/404.pug': { copy: '404.pug' },
		'./views/500.pug': { copy: '500.pug' },
		'./views/homepage.pug': { copy: 'homepage.pug' },
		'./views/layout.pug': { copy: 'layout.pug' }
	}

};

