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
/*--------------------------------------application------------------------------------------------------*/
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

/*--------------------------------------templates------------------------------------------------------*/

var templID;
var hashID;

hooks.after("Template collection > Creates a new document template by uploading file from URL", function (transaction, done) {

    templID = JSON.parse(transaction.real.body)['id'];
    hooks.log('Successfully created template_id => '+templID);
    done();
});
hooks.before("Template collection > Information about created template", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Updates template information", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Fillable fields for selected document template", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Downloads document template", function (transaction, done) {
    transaction.skip = true;
    hooks.log('skipped');
    done();
});
hooks.before("Template collection > Child documents for selected document template", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', 20748422);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Downloads zip archive of signatures", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    transaction.skip = true;
  /*  var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);*/
    done();
});
hooks.before("Template collection > Fills a fillable form template", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Uploading the initial version of the document", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    transaction.skip=true;
    done();
});
hooks.before("Template collection > Get values for fillable form", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Creates a new share link to document", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.after("Template collection > Creates a new share link to document", function (transaction, done) {
    hashID = JSON.parse(transaction.real.body)['hash'];
    hooks.log(hashID);
    done();
});
hooks.before("Template collection > Retrieve a list of hash", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Deletes one share link to document by hash", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    transaction.fullPath = transaction.fullPath.replace('1023456789', templID);
    transaction.fullPath = transaction.fullPath.replace('hash', hashID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    hooks.log('Successfully removed {hash} and replaced by current hash => '+hashID);
    done();
});
hooks.before("Template collection > Deletes all share links to document by id", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
hooks.before("Template collection > Deletes document template item", function (transaction, done) {
    //reusing data from previous response here
    //replacing id in URL with stashed id from previous response
    var url = transaction.fullPath;
    transaction.fullPath = url.replace('1023456789', templID);
    hooks.log('Successfully removed {template_id} and replaced by current template_id => '+templID);
    done();
});
