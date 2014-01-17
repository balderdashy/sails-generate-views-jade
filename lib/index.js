/**
 * sails-generate-views-jade
 *
 * Usage:
 * `sails generate views-jade`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-views-jade) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

