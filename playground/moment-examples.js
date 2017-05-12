var moment = require('moment');

// console.log(moment().format());

// December 31st 1969 @ 11:59am -> -60
// January 1st 1970 @ 12:01am -> 60
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current timestamp ', now.unix());

var timestamp = 1494543547;
var currentMoment = moment.unix(1494543547);

// console.log('Current Moment ', currentMoment.format('MMM D, YY @ hh:mm.ss a'));

// January 3rd, 2016 @ 12:13 AM
console.log('Current Moment ', currentMoment.format("MMMM Do, YYYY @ hh:mm A"));
