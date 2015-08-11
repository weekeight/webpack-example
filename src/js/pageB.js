require('../css/main.less');
require('../css/pageB.less');
var Handlebars = require('handlebars');
var Tips = require('./common/tips.js');

var bodySource = $('#J_BodyTemplate').html();
var bodyTemplate = Handlebars.compile(bodySource);
var bodyHtml = bodyTemplate({
	name: "I am pageB compiled by handlebars...."
});
$('body').html(bodyHtml);

module.exports = "I am PageB....";