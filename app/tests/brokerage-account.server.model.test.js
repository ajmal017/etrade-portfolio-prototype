'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	BrokerageAccount = mongoose.model('BrokerageAccount');

/**
 * Globals
 */
var user, brokerageAccount;

/**
 * Unit tests
 */
describe('Brokerage account Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			brokerageAccount = new BrokerageAccount({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return brokerageAccount.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		BrokerageAccount.remove().exec();
		User.remove().exec();

		done();
	});
});