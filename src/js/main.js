require('../css/main.less');
var Tips = require('./common/tips.js');

$('h1').css('color', 'red');
console.log('I am homepage....');

require.ensure(['./common/async.js'], function(require){
	var obj = require('./common/async.js');
	obj('hello msg..');
});

if(__DEV__){
	console.log('The project is under dev environment now...');
}

module.exports = {
	name: 'main.js for homepage...',
	show: function(){
		console.log(Tips);
	}
}