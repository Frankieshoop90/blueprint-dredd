var hooks = require('hooks');

/*
hooks.beforeAll(function (transactions, done) {
    hooks.log('before all');
    done();
});

hooks.beforeEach(function (transaction, done) {
    hooks.log('before each');
    done();
});

hooks.before("Machines > Machines collection > Get Machines", function (transaction, done) {
    hooks.log("before");
    done();
});

hooks.beforeEachValidation(function (transaction, done) {
    hooks.log('before each validation');
    done();
});

hooks.beforeValidation("Machines > Machines collection > Get Machines", function (transaction, done) {
    hooks.log("before validation");
    done();
});

hooks.after("Machines > Machines collection > Get Machines", function (transaction, done) {
    hooks.log("after");
    done();
});

hooks.afterEach(function (transaction, done) {
    hooks.log('after each');
    done();
});

hooks.afterAll(function (transactions, done) {
    hooks.log('after all');
    done();
})*/

var appID;

hooks.after("Apllication collection > Creates a new application", function (transaction, done) {

    appID = JSON.parse(transaction.real.body)['id'];
    hooks.log('Successfully created applicationId => '+appID);
    done();
});

hooks.before("Apllication collection > Information about created application", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('applicationId', appID);
    hooks.log('Successfully removed {applicationId} and replaced by current applicationId => '+appID);
    done();
});

hooks.before("Apllication collection > Updates application", function (transaction, done) {
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('applicationId', appID);
    hooks.log('Successfully removed {applicationId} and replaced by current applicationId => '+appID);
    done();
});

hooks.before("Apllication collection > Deletes application item", function (transaction, done) {
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('applicationId', appID);
    hooks.log('Successfully removed {applicationId} and replaced by current applicationId => '+appID);
    done();
});


hooks.afterAll(function (transactions, done) {
    hooks.log(transactions.fullPath);
    done();
});