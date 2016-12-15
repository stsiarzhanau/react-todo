var moment = require('moment');

var now = moment();

console.log('Current timestamp', now.unix());

const timestamp = 1481741047;
const currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format('MMM DD, YYYY @ h:mm a'));


// PARSE

// Get the current date:
// moment()

// Create a moment from a string representation of date:
// moment(String);
// var day = moment("1995-12-25");

// If you know the format of an input string, you can use that to parse a moment:
// moment(String, String);
// moment(String, String, String);
// moment(String, String, Boolean);
// moment(String, String, String, Boolean);
// var day = moment('2012-10-14', 'YYYY-MM-DD', 'fr', true);

// If you don't know the exact format of an input string, but know it could be
// one of many, you can use an array of formats:
// moment(String, String[], String, Boolean);
// var day = moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true);

// Special Formats:
// moment(String, moment.CUSTOM_FORMAT, [String], [Boolean]);
// moment(String, [..., moment.ISO_8601, ...], [String], [Boolean]);

// Create a moment by specifying some of the units in an object:
// moment({unit: value, ...});
// moment({ years:2010, months:3, days:5, hours:15, minutes:10, seconds:3, milliseconds:123});

// Create a moment by passing number of milliseconds since the Unix Epoch:
// moment(Number);
// var day = moment(1318781876406);

// Create a moment from a Unix timestamp (seconds since the Unix Epoch):
// moment.unix(Number)
// var day = moment.unix(1318781876);


// DISPLAY

// moment().format();
// moment().format(String);

// Output the number of milliseconds since the Unix Epoch:
// moment().valueOf();
// +moment();

// Output a Unix timestamp (the number of seconds since the Unix Epoch):
// moment(1318874398806).unix(); // 1318874398


